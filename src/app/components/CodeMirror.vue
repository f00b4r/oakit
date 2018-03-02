<template>
  <codemirror
    :value="value"
    :options="cmOptions"
    @input="onInputChange"/>
</template>

<script>
import {codemirror} from "vue-codemirror";
import "codemirror/addon/fold/brace-fold";
import "codemirror/addon/fold/foldcode";
import "codemirror/addon/fold/comment-fold";
import "codemirror/addon/fold/foldgutter";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "codemirror/mode/markdown/markdown";
import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/properties/properties";
import "codemirror/mode/yaml/yaml";
import "codemirror/mode/meta";
import "codemirror/addon/fold/foldgutter.css";
import "codemirror/addon/display/fullscreen.js";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

export default {
	name: "CodeMirror",
	components: {
		codemirror
	},
	props: [
		"value",
		"options"
	],
	data() {
		return {};
	},
	computed: {
		cmOptions() {
			const cmDefaultOptions = {
				tabSize: 4,
				mode: "text/javascript",
				theme: "material",
				lineNumbers: true,
				line: true,
				lineWrapping: true,
				foldGutter: true,
				smartIndent: false, // javascript mode does bad things with jsx indents
				matchBrackets: true,
				gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
				extraKeys: {
					"F11": (cm) => {
						cm.setOption("fullScreen", !cm.getOption("fullScreen"));
						this.$emit("fullscreen", !cm.getOption("fullScreen"));
					},
					"Esc": (cm) => {
						if (cm.getOption("fullScreen")) {
							cm.setOption("fullScreen", false);
							this.$emit("fullscreen", !cm.getOption("fullScreen"));
						}
					}
				}
			};
			return Object.assign({}, cmDefaultOptions, this.options);
		}
	},
	methods: {
		onInputChange(value) {
			this.$emit("onChange", value);
		}
	}

};
</script>

<style>
  .CodeMirror-fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: auto;
    z-index: 9;
  }
</style>