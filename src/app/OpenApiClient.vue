<template>
  <div
    id="main"
    class="container-fluid">
    <div class="row">
      <div class="col-sm-4 oat-search pt-3">
        <nav class="oat-search-header p-3">
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
        <nav
          class="oat-search-body"
          v-if="!fullscreen">
          <path-menu
            :schema="schema"
            :request-url="selectedUrl"
            :search="search"
            :search-regexp="searchRegexp"
            @selectUrl="onSelectUrl"/>
        </nav>
      </div>
      <div class="col-sm-8 pt-3">
        <request-url
          @send="onSendRequest"
          @methodChange="onSelectMethod"
          @changeUrl="onUrlChange"
          @serverChange="onChangeServer"
          :selected-server="selectedServerUrl"
          :servers="servers"
          :request-url="requestUrl"
          :request-method="requestMethod"
          :allowed-methods="allowedMethods"/>

        <main>
          <div class="row pt-3">
            <div class="col-md-6">
              <div class="border border-dark">
                <code-mirror
                  :value="requestBody"
                  :options="{}"
                  @fullscreen="onFullScreen"
                  @onChange="onRequestBodyChange"/>
              </div>
              <header-table :headers="requestHeaders"/>
              <basic-auth @change="onChangeBasicAuth"/>
              <request-params
                :selected-server-url="selectedServerUrl"
                :schema="schema"
                :request-method="requestMethod"
                :selected-url="selectedUrl"
              />
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
</template>

<script>
import RequestUrl from "./components/RequestUrl.vue";
import AllowedMethodInfo from "./components/AllowedMethodInfo.vue";
import PathMenu from "./components/PathMenu.vue";
import CodeMirror from "./components/CodeMirror";
import {sendRequest} from "./actions/sendRequest";
import {getBasePath, getFirstServerUrl, getRequestBody, getServers} from "./helper/schemaHelper";
import HeaderTable from "./components/HeaderTable.vue";
import BasicAuth from "./components/BasicAuth.vue";
import SearchInput from "./components/SearchInput";
import RequestParams from "./components/RequestParams";

const AUTHORIZATION_HEADER = "Authorization";

export default {
	components: {
		RequestParams,
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
			fullscreen: false,
			search: "",
			searchRegexp: false,
			selectedServerUrl: "",
			parameters: {
				query: {},
				path: {}
			}
		};
	},
	props: ["schema"],
	computed: {
		servers() {
			return getServers(this.schema);
		},
		requestUrl() {
			return this.selectedServerUrl + getBasePath(this.schema) + this.selectedUrl;
		},
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
			this.selectedUrl = url.replace(this.selectedServerUrl, "");
		},
		onSelectMethod(method) {
			this.requestMethod = method;
		},
		onChangeServer(server) {
			this.selectedServerUrl = server;
		}
	}
};
</script>

<style>
  .oat-search {
    padding-left: 0 !important;
    padding-right: 0 !important;
    background-color: #eee;
    height: 100vh;
  }

  .oat-search-header {
    position: absolute;
    height: 100px;
    width: 100%;
  }

  .oat-search-body {
    padding-left: 0 !important;
    padding-right: 0 !important;;
    background-color: #fff;
    margin-top: 100px;
    height: calc(100% - 100px);
    overflow-y: auto;
    overflow-x: hidden;
    border-right: 1px solid #eee;
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    .oat-search {
      height: 300px;
    }
  }

  .oat-search-body .nav-item {
    width: 100%;
    border-bottom: 1px solid #ddd;
  }

  .oat-search-body .nav-item + .nav-item {
    margin-left: 0;
  }

  .oat-search-body .nav-link {
    border-radius: 0;
  }
</style>