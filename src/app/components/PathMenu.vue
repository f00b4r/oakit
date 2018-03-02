<template>
  <ul class="nav nav-pills flex-column">
    <li
      class="nav-item"
      v-for="(url, index) in urls"
      :key="index">
      <a
        href="#"
        @click="onSelectUrl(url)"
        :class="{'nav-link': true, 'active': url === requestUrl}">{{ url }}</a>
    </li>
  </ul>
</template>

<script>
export default {
	name: "PathMenu",
	props: [
		"schema",
		"requestUrl"
	],
	computed: {
		urls() {
			return Object.keys(this.schema.paths);
		}
	},
	methods: {
		onSelectUrl(url) {
			this.$emit("selectUrl", url);
		}
	}
};
</script>
