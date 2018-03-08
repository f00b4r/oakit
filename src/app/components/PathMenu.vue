<template>
  <ul class="nav nav-pills flex-column">
    <li
      class="nav-item"
      v-for="(url, index) in urls"
      :key="index">
      <a
        :tabindex="index + 1"
        href="#"
        @click="onSelectUrl(url)"
        :class="{'nav-link': true, 'active': url === requestUrl}">{{ url }}</a>
    </li>
  </ul>
</template>

<script>
import trim from "lodash/trim";

export default {
	name: "PathMenu",
	props: [
		"schema",
		"search",
		"searchRegexp",
		"requestUrl"
	],
	computed: {
		urls() {
			if (this.searchRegexp) {
				return Object.keys(this.schema.paths).filter(u => {
					return u.match(this.search);
				});
			} else {
				const search = this.search.toLowerCase();
				return Object.keys(this.schema.paths).filter(u => {
					return u.includes(trim(search));
				});
			}
		}
	},
	methods: {
		onSelectUrl(url) {
			this.$emit("selectUrl", url);
		}
	}
};
</script>
