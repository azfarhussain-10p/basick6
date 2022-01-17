import http from 'k6/http'

export default function putCall(url, requestBody, params) {
	var response = http.put(url, requestBody, params)
	return response
}
