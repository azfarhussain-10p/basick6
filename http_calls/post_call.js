import http from 'k6/http'

export default function postCall(url, requestBody, params) {
	var response = http.post(url, requestBody, params)
	return response
}
