import first from "lodash/first";
import get from "lodash/get";

/**
 * Gets the first part of schema
 *
 * @param schema
 * @returns {string}
 */
export function getBasePath(schema) {
	return schema.basePath ? schema.basePath : "";
}

/**
 * Get the address of first server
 *
 * @param schema
 * @returns {string}
 */
export function getFirstServerUrl(schema) {
	if (schema.servers && schema.servers.length > 0) {
		return schema.servers[0].url;
	} else {
		return "";
	}
}

/**
 * Get the reference object in swagger io schema
 *
 * @param obj
 * @param {string} ref
 * @param defaultObject
 */
function getRef(obj, ref, defaultObject) {
	return get(obj, ref.substr(1).replaceAll("/", ","), defaultObject);
}

function hasParams(schema, url) {
	return schema && schema.paths && schema.paths[url] && schema.paths[url].parameters && Array.isArray(schema.paths[url].parameters);
}

export function getRequestBody(schema, url) {
	if (hasParams(schema, url)) {
		const param = first(schema.paths[url].parameters.filter(p => p.in === "body"));

		return JSON.stringify(param);
	}
	return "";
}