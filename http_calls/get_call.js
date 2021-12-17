import http from 'k6/http'

export default function getCall(url, params) {
	var response = http.get(url,params)
	return response
}
