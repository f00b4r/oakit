<template>
  <div class="input-group">
    <div
      class="input-group-prepend"
      v-if="servers.length > 1">
      <button
        type="button"
        class="btn-secondary btn  dropdown-toggle dropdown-toggle-split"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        <span class="sr-only">Select Server</span>
      </button>
      <div class="dropdown-menu">
        <a
          :class="['dropdown-item', s === selectedServer ? 'bg-dark text-white': '']"
          href="#"
          v-for="(s, index) in servers"
          :key="index"
          @click="onSelectSelectServer(s)">
          {{ s !== "" ? s : "No Server" }}
        </a>
      </div>
    </div>
    <input
      type="text"
      class="form-control"
      id="inlineFormInputGroupUsername2"
      @input="onChangeUrl"
      :value="requestUrl">
    <div class="input-group-append">
      <div class="input-group-text">
        <allowed-method-info
          :allowed-methods="allowedMethods"
          @changeMethod="onSelectMethod"/>
      </div>
      <button
        type="button"
        :disabled="disabledSend"
        :class="cls"
        @click="onSendRequest">
        {{ requestMethod }}
      </button>
      <button
        type="button"
        :class="clsDropdown"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        <span class="sr-only">Select Method</span>
      </button>
      <div class="dropdown-menu">
        <a
          class="dropdown-item"
          href="#"
          v-for="(m, index) in allowedMethods"
          :key="index"
          @click="onSelectMethod(m)">{{ m }}</a>
      </div>
    </div>

  </div>
</template>

<script>

import AllowedMethodInfo from "./AllowedMethodInfo.vue";

function getButtonClass(method) {
	return {
		"GET": "btn-secondary",
		"POST": "btn-success",
		"PUT": "btn-primary",
		"DELETE": "btn-danger",
		"None": "btn-dark"
	}[method];
}

export default {
	components: {AllowedMethodInfo},
	name: "RequestUrl",
	props: [
		"allowedMethods",
		"requestMethod",
		"requestUrl",
		"servers",
		"selectedServer"
	],
	computed: {
		disabledSend() {
			return !["GET", "PUT", "POST", "DELETE"].includes(this.requestMethod);
		},
		cls() {
			return getButtonClass(this.requestMethod) + " btn";
		},
		clsDropdown() {
			return getButtonClass(this.requestMethod) + " btn dropdown-toggle dropdown-toggle-split";
		}
	},
	methods: {
		onSelectMethod(m) {
			this.$emit("methodChange", m);
		},
		onSelectSelectServer(s) {
			this.$emit("serverChange", s);
		},
		onChangeUrl(e) {
			this.$emit("changeUrl", e.target.value);
		},
		onSendRequest() {
			this.$emit("send");
		}
	}
};
</script>
