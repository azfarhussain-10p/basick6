import postCall from '../http_calls/post_call.js'
import {
	api21URL,
	constentType,
	host,
	origin,
	xapikey,
} from '../http_constraints/web_constraints.js'
import { check, sleep } from 'k6'
import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js'
import { SharedArray } from 'k6/data'

const csvData = new SharedArray('another data name', function () {
	// Load CSV file and parse it using Papa Parse
	return papaparse.parse(open('../fixtures/csv/userData.csv'), {
		header: true,
	}).data
})

export default function createAnApplicantAccount(authToken) {
	// Pick a random username/password pair
	let randomUser = csvData[0]
	console.log('Random User: ', JSON.stringify(randomUser.studEmail))

	var payLoad = JSON.stringify({
		address: {
			addressline1: '3003 Washington Blvd',
			addressline2: 'Ste 1000',
			addressline3: '',
			city: 'Arlington',
			country: 'USA',
			state: 'VA',
			zip: '22225',
		},
		birthdate: '07/12/1975',
		email: randomUser.studEmail,
		firstname: 'wnDmfZSSOm',
		lastname: 'App1_LN',
		phone: {
			countrycode: '+1',
			number: '9872543211',
		},
		applicantType: 'FY',
		startYear: '0',
		bypassUI: true,
		password: randomUser.password,
		registrationType: '7',
		canCollegeCommunicate: false,
		canCommonAppCommunicate: false,
		euStatus: 0,
	})

	var params = {
		headers: {
			'Content-Type': constentType,
			Authorization: authToken,
			'x-api-key': xapikey,
			Origin: origin,
			Host: host,
		},
	}

	const response = postCall(api21URL, payLoad, params)

	console.log('API Response Body: ' + response)

	check(response, {
		'status is 201': r => r.status === 201,
	})

	sleep(1)
}
