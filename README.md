# Open API Toolkit

## Version

| State       | Version      | Branch   |
|-------------|--------------|----------|
| master      | `^0.0.1`     | `master` |


## Development

- `npm install`
- `npm run start`
- open `localhost:8080` in your browser 

## Deployment

- `npm run build`

## Usage

### Single page application

```javascript
import Vue from "vue";
import OpenApiClient from "openapi-toolkit";
import {TEST_SWAGGER} from "<path to your schema>";

new Vue({
	el: "#app",
	render: h => h(OpenApiClient, {
		props: {
			schema: TEST_SWAGGER
		}
	})
});
```

### In vue component

```vue
<template>
  <div>
  	<open-api-client :schema="schema" />
  </div>
</template>

<script>
import OpenApiClient from "openapi-toolkit";

export default {
	components: {OpenApiClient},
	props: [
		"schema",
	]
};
</script>

```



## Maintainers

<a href="https://github.com/jurahu">Jura Papp</a>

-----

<a href="https://github.com/tlapnet"><img  width="200" src="https://cdn.rawgit.com/f3l1x/xsource/2463efb7/assets/tlapdev.png"></a>

The development is sponsored by [Tlapnet](http://www.tlapnet.cz)