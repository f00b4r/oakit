import Vue from "vue";
import App from "./app/OpenApiClient.vue";

window.openToolkitInit = function (element, schema) {
	new Vue({
		el: element,
		render: h => h(App, {
			props: {
				schema: schema
			}
		})
	});
};
