/* eslint-env node */
const webpack = require("webpack");
const path = require("path");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const Visualizer = require("webpack-visualizer-plugin");

module.exports = {
	entry: {
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
		loaders: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader"
					}
				]
			},
			{

				test: /\.vue$/,
				loader: "vue-loader",
				options: {
					loaders: {
						// Override the default loaders
					}
				},
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor",
			minChunks: function (module) {
				return module.context && module.context.indexOf("node_modules") !== -1;
			}
		}),
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
	}
	// devtool: '#eval-source-map'
};

if (process.env.NODE_ENV === "production") {
	module.exports.devtool = "#source-map";

	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: "\"production\""
			}
		}),
		new UglifyJSPlugin({
			uglifyOptions: {
				ie8: false,
				ecma: 8,
				output: {
					comments: false,
					beautify: false
				},
				warnings: false
			}
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	]);
}