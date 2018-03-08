function formatIfJson(response) {
	try {
		return JSON.stringify(JSON.parse(response), null, 4);
	} catch (e) {
		return response;
	}
}

function responseHandler(xhr, callback) {
	if (xhr.readyState !== XMLHttpRequest.DONE) {
		return;
	}
	const responseHeaders = {};
	xhr.getAllResponseHeaders().split("\n").forEach(line => {
		const [name, value] = line.split(":");
		responseHeaders[name] = value;
	});

	callback(responseHeaders, formatIfJson(xhr.responseText), xhr.status);
}

export function sendRequest({url, method, body, headers}, callback) {
	// http://localhost:10080/Virtual/master-projectus.jrh/apirest/open-api/schema
	callback({}, `Sending Request to ${method} ${url}...`, 0);

	const xhr = new XMLHttpRequest();

	if (!["POST", "PUT", "DELETE", "GET"].includes(method)) {
		throw new Error("Method POST, PUT, DELETE, GET expected, got '" + method + "'");
	}

	xhr.open(method, url, true);
	xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
	Object.keys(headers).forEach(headerName => {
		xhr.setRequestHeader(headerName, headers[headerName]);
	});
	xhr.onreadystatechange = responseHandler.bind(this, xhr, callback);
	xhr.send(body);

}