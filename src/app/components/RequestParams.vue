<template>
  <div v-if="pathParams.length">
    <div
      v-for="(param, key) in pathParams"
      :key="key">
      <div class="form-group">
        <label :for="param.name">{{ param.name }}</label>
        <input
          class="form-control"
          :id="param.name"
          :name="param.name"
          @input="onInputChange">
      </div>
    </div>
  </div>
</template>

<script>
import {getPathParams} from "../helper/schemaHelper";

export default {
	name: "RequestParams",
	props: ["selectedUrl", "selectedServerUrl", "schema", "requestMethod"],
	computed: {
		pathParams() {
			return getPathParams(this.schema, this.requestMethod, this.selectedUrl);
		}
	},
	methods: {
		onInputChange(event) {
			this.$emit("changePathParam", {
				name: event.target.name,
				value: event.target.value
			});
		}
	}
};
</script>
