<template>
  <div class="input-group">
    <input
      tabindex="1"
      id="search"
      :placeholder="searchRegexp ? 'Regexp' : 'Search'"
      :class="['form-control', !validRegexp ? 'is-invalid' : '']"
      v-model="search"
      @input="onInput">
    <div class="input-group-append">
      <button
        :class="['btn', searchRegexp ? 'btn-primary' : 'btn-outline-secondary']"
        type="button"
        data-toggle="tooltip"
        data-placement="right"
        title="Toggle Regexp Search"
        @click="onToggleSearchMode">
        <i class="oi oi-code"/>
      </button>
    </div>
    <div
      class="invalid-feedback"
      v-if="!validRegexp">
      Invalid Regular Expression
    </div>
  </div>
</template>

<script>
export default {
	name: "SearchInput",
	props: ["value", "searchRegexp"],
	data() {
		return {
			search: "",
			validRegexp: true
		};
	},
	methods: {
		onInput: function (e) {
			try {
				new RegExp(e.target.value);
				this.validRegexp = true;
				this.$emit("input", e.target.value);
			} catch (e) {
				this.validRegexp = false;
			}
		},
		onToggleSearchMode: function () {
			this.$emit("toggleSearchMode", true);
		}
	}
};
</script>
