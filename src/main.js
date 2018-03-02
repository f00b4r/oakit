import Vue from "vue";
import App from "./app/OpenApiClient.vue";
import {TEST_SWAGGER} from "./data/apiDoc";

new Vue({
	el: "#app",
	render: h => h(App, {
		props: {
			schema: TEST_SWAGGER
		}
	})
});
