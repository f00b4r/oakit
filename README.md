# Open API Toolkit

Alternative to swagger UI client written in Vue JS.

- It has fullscreen mode for request and for response (F11/Esc)
- Can handle basic auth
- Can change servers on the go when they are setup in schema
- Filtering for paths with regexp or simple search

<img src="https://raw.githubusercontent.com/apitte/openapi-toolkit/master/.docs/screenshot2.png?raw=true">

## Version

[![NPM](https://nodei.co/npm/@apitte/openapi-toolkit.png?compact=true)](https://www.npmjs.com/package/@apitte/openapi-toolkit)

| State       | Version      | Branch   |
|-------------|--------------|----------|
| master      | `^0.0.3`     | `master` |

## Downloading

- `npm install @apitte/openapi-toolkit`

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
import OpenApiClient from "@apitte/openapi-toolkit";
import SWAGGER from "./swagger.json";

new Vue({
	el: "#app",
	render: h => h(OpenApiClient, {
		props: {
			schema: SWAGGER
		}
	})
});
```

### In vue component

```vue
<template>
  <div>
    <open-api-client :schema="schema"/>
  </div>
</template>

<script>
import OpenApiClient from "@apitte/openapi-toolkit";
import SWAGGER from "./swagger.json";

export default {
	components: {OpenApiClient},
	data() {
		return {
			schema: TEST_SWAGGER
    };
	}
};
</script>
```



## Maintainers

<a href="https://github.com/jurahu">Jura Papp</a>

-----

<a href="https://github.com/tlapnet"><img  width="200" src="https://cdn.rawgit.com/f3l1x/xsource/2463efb7/assets/tlapdev.png"></a>

The development is sponsored by [Tlapnet](http://www.tlapnet.cz)