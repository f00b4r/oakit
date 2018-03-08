<template>
  <div
    id="main"
    class="container-fluid">
    <div class="row">
      <div class="col">
        <div
          class="row"
          v-if="!fullscreen">
          <nav class="col-sm-4 col-md-3 d-none d-sm-block bg-faded logo">
            {{ schema.info.title }}
            <div class="row">
              <div class="col">
                <search-input
                  v-model="search"
                  :search-regexp="searchRegexp"
                  @toggleSearchMode="onToggleSearchMode"/>
              </div>
            </div>
          </nav>
          <div class="col-sm-8 offset-sm-4 col-md-9 offset-md-3 pt-3">
            <request-url
              @send="onSendRequest"
              @methodChange="onSelectMethod"
              @changeUrl="onUrlChange"
              :request-url="requestUrl"
              :request-method="requestMethod"
              :allowed-methods="allowedMethods"/>
          </div>
        </div>
        <div class="row">
          <nav
            class="col-sm-4 col-md-3 d-none d-sm-block bg-faded sidebar"
            v-if="!fullscreen">
            <path-menu
              :schema="schema"
              :request-url="selectedUrl"
              :search="search"
              :search-regexp="searchRegexp"
              @selectUrl="onSelectUrl"/>
          </nav>
          <main class="col-sm-8 offset-sm-4 col-md-9 offset-md-3 pt-3">
            <div class="row">
              <div class="col-md-6">
                <div>&nbsp;
                </div>
                <div class="border border-dark">
                  <code-mirror
                    :value="requestBody"
                    :options="{}"
                    @fullscreen="onFullScreen"
                    @onChange="onRequestBodyChange"/>
                </div>
                <header-table :headers="requestHeaders"/>
                <basic-auth @change="onChangeBasicAuth"/>
              </div>
              <div class="col-md-6">
                <div :class="statusBackgroundColor">
                  <div class="col">Status Code:
                    {{ responseStatus }}
                  </div>
                </div>
                <div>
                  <div :class="statusBorderColor">
                    <code-mirror
                      :value="responseBody"
                      :options="{readOnly: true}"
                      @fullscreen="onFullScreen"/>
                  </div>
                  <header-table :headers="responseHeaders"/>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RequestUrl from "./components/RequestUrl.vue";
import AllowedMethodInfo from "./components/AllowedMethodInfo.vue";
import PathMenu from "./components/PathMenu.vue";
import CodeMirror from "./components/CodeMirror";
import {sendRequest} from "./actions/sendRequest";
import {getBasePath, getFirstServerUrl, getRequestBody} from "./helper/schemaHelper";
import HeaderTable from "./components/HeaderTable.vue";
import BasicAuth from "./components/BasicAuth.vue";
import SearchInput from "./components/SearchInput";

const AUTHORIZATION_HEADER = "Authorization";

export default {
	components: {
		SearchInput,
		BasicAuth,
		HeaderTable,
		PathMenu,
		AllowedMethodInfo,
		CodeMirror,
		RequestUrl
	},
	created() {
		this.selectedServerUrl = getFirstServerUrl(this.schema);
	},
	data() {
		return {
			selectedUrl: "",
			allowedMethods: ["None"],
			requestMethod: "None",
			requestHeaders: {
				// "Authorization": "Basic " + btoa("user:pass"),
				"Accept": "application/json",
				"Content-Type": "application/json"
			},
			requestBody: "",
			responseStatus: 0,
			responseHeaders: {},
			responseBody: "",
			requestUrl: "",
			fullscreen: false,
			search: "",
			searchRegexp: false,
			selectedServerUrl: ""
		};
	},
	props: ["schema"],
	computed: {
		statusBorderColor() {
			let cls = "border ";
			if (this.responseStatus >= 100 && this.responseStatus < 200) {
				cls += "border-secondary";
			} else if (this.responseStatus >= 200 && this.responseStatus < 300) {
				cls += "border-success";
			} else if (this.responseStatus >= 300 && this.responseStatus < 400) {
				cls += "border-primary";
			} else if (this.responseStatus >= 400 && this.responseStatus < 500) {
				cls += "border-warning";
			} else if (this.responseStatus >= 500 && this.responseStatus < 600) {
				cls += "border-danger";
			} else {
				cls += "border-secondary";
			}
			return cls;
		},
		statusBackgroundColor() {
			let cls = "bg ";
			if (this.responseStatus >= 100 && this.responseStatus < 200) {
				cls += "bg-secondary text-white";
			} else if (this.responseStatus >= 200 && this.responseStatus < 300) {
				cls += "bg-success text-white";
			} else if (this.responseStatus >= 300 && this.responseStatus < 400) {
				cls += "bg-primary text-white";
			} else if (this.responseStatus >= 400 && this.responseStatus < 500) {
				cls += "bg-warning text-secondary";
			} else if (this.responseStatus >= 500 && this.responseStatus < 600) {
				cls += "bg-danger text-white";
			} else {
				cls += "bg-dark text-white";
			}
			return cls;
		}
	},
	methods: {
		onRequestBodyChange(requestBody) {
			this.requestBody = requestBody;
		},
		onToggleSearchMode() {
			this.searchRegexp = !this.searchRegexp;
		},
		onSelectUrl(url) {
			this.requestUrl = this.selectedServerUrl + getBasePath(this.schema) + url;
			this.selectedUrl = url;
			this.allowedMethods = Object.keys(this.schema.paths[url]).map(m => m.toUpperCase());
			this.requestMethod = this.allowedMethods[0];
			this.requestBody = getRequestBody(this.schema, url);
		},
		onChangeBasicAuth(data) {
			if (data.use) {
				this.$set(this.requestHeaders, AUTHORIZATION_HEADER, "Basic " + btoa(data.user + ":" + data.password));
			} else {
				this.$delete(this.requestHeaders, AUTHORIZATION_HEADER);
			}
		},
		onFullScreen() {
			this.fullscreen = !this.fullscreen;
		},
		onSendRequest() {
			const requestParams = {
				url: this.requestUrl,
				method: this.requestMethod,
				body: this.requestBody,
				headers: this.requestHeaders
			};
			sendRequest(requestParams, (responseHeaders, responseBody, responseStatus) => {
				this.responseBody = responseBody;
				this.responseHeaders = responseHeaders;
				this.responseStatus = responseStatus;
			});
		},
		onUrlChange(url) {
			this.requestUrl = url;
		},
		onSelectMethod(method) {
			this.requestMethod = method;
		}
	}
};
</script>

<style>
  .logo {
    position: fixed;
    top: 0;
    height: 120px;
    left: 0;
    z-index: 1000;
    padding: 20px;
    overflow-x: hidden;
    overflow-y: hidden;
    background-color: #eee;
  }

  .sidebar {
    position: fixed;
    top: 120px;
    bottom: 0;
    left: 0;
    z-index: 1000;
    padding: 20px;
    overflow-x: hidden;
    overflow-y: auto;
    border-right: 1px solid #eee;
  }

  .sidebar {
    padding-left: 0;
    padding-right: 0;
  }

  .sidebar .nav {
    margin-bottom: 20px;
  }

  .sidebar .nav-item {
    width: 100%;
    border-bottom: 1px solid #ddd;
  }

  .sidebar .nav-item + .nav-item {
    margin-left: 0;
  }

  .sidebar .nav-link {
    border-radius: 0;
  }

</style>