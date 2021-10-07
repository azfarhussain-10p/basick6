import http from 'k6/http'
import { check } from 'k6'

export default function postCall(url, requestBody, params) {
	var response = http.post(url, requestBody, params)

	console.log('API Response Status: ' + response.status)

	check(response, {
		'status is 200': r => r.status === 200,
	})

	return response
}
