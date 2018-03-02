<template>
  <span
    :style="styles"
    :class="classes">
    <span
      v-for="(m, index) in allowedMethodsUI"
      :class="m.cls"
      :key="index"
      @click="onClickMethod(m.method)">{{ m.method }}
    </span>
  </span>
</template>

<script>

function getBadgeClass(method) {
	return {
		"GET": "badge-secondary",
		"POST": "badge-success",
		"PUT": "badge-primary",
		"DELETE": "badge-danger"
	}[method] + " clickable badge mr-1";
}

export default {
	name: "AllowedMethodInfo",
	props: [
		"allowedMethods",
		"styles",
		"classes"
	],
	computed: {
		allowedMethodsUI() {
			return this.allowedMethods.map(m => ({
				method: m,
				cls: getBadgeClass(m)
			}));
		}
	},
	methods: {
		onClickMethod(value) {
			this.$emit("changeMethod", value);
		}
	}
};
</script>

<style scoped>
  .clickable {
    cursor: pointer;
  }
</style>