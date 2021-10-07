import postCall from '../http_calls/post_call.js'
import {
	commonAppURL,
	constentType,
	origin,
	xapikey,
} from '../http_constraints/web_constraints.js'

export default function getAuthToken() {
	var requestBody = JSON.stringify({
		UserName: __ENV.userName,
		Password: __ENV.password,
	})
	var params = {
		headers: {
			'Content-Type': constentType,
			'x-api-key': xapikey,
			Origin: origin,
		},
	}

	var response = postCall(commonAppURL, requestBody, params)

	const responseToken = JSON.parse(response.body)

	console.log(JSON.stringify(responseToken.token))

	const token = JSON.stringify(responseToken.token)

	return token
}
