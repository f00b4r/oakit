# Open API Toolkit

Alternative to swagger UI client written in Vue JS.

- It has fullscreen mode for request and for response (F11/Esc)
- Can handle basic auth
- Can change servers on the go when they are setup in schema
- Filtering for paths with regexp or simple search

<img src="https://raw.githubusercontent.com/apitte/openapi-toolkit/master/.docs/screenshot2.png?raw=true">

## Dependencies

- it uses bootstrap4
- it uses open icon

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

### Using compiled in your html

```html

<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
    content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>OpenApi Toolkit</title>
  <!--LOAD BOOTSTRAP-->
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
    integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
    crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
    integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
    crossorigin="anonymous"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
    integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
    crossorigin="anonymous"></script>
  <!--LOAD OPEN ICONS-->
  <link rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css"
    integrity="sha256-BJ/G+e+y7bQdrYkS2RBTyNfBHpA9IuGaPmf9htub5MQ=" crossorigin="anonymous"/>
</head>
<body>
	<div id="opentoolkit"></div>
	<script src="<path to your dist>/dist/vendor.js"></script>
	<script src="<path to your dist>/dist/main.js"></script>
	<script>
		//Initialize open toolkit to id
		var mySwaggerJson = {};//here you load your swagger
		openToolkitInit("#opentoolkit", mySwaggerJson);
	</script>
</body>
</html>

```

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