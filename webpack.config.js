/* eslint-env node */
const path = require("path");
const Visualizer = require("webpack-visualizer-plugin");

module.exports = {
	entry: {
		vendor: ["vue", "codemirror", "vue-codemirror"],
		data: ["./src/data/pet.js", "./src/data/apiDoc.js"],
		main: "./src/main.js"
	},
	output: {
		path: path.resolve(__dirname, "./dist"),
		publicPath: "/dist",
		filename: "[name].js"
	},
	resolve: {
		alias: {
			"vue$": "vue/dist/vue.esm.js"
		},
		extensions: [".js", ".jsx", ".vue"]
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: ["babel-loader"],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.vue$/,
				use: ["vue-loader"],
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new Visualizer()
	],
	devServer: {
		historyApiFallback: true,
		noInfo: true,
		overlay: true,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET",
			"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
		}
	},
	performance: {
		hints: false
	},
	mode: "development"
};