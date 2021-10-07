import http from 'k6/http'
import papaparse from '../support/papaparse.min.js'
import { check, sleep } from 'k6'
import { SharedArray } from 'k6/data'
import postCall from '../http_calls/post_call.js'
import {
	apiPartner,
	applicantToken,
	constentType,
	host,
	origin,
	xapikey,
} from '../http_constraints/web_constraints.js'
import { fetchDataSet } from '../support/utlitity.js'

// const csvData = new SharedArray('another data name', function () {
// 	// Load CSV file and parse it using Papa Parse
// 	return papaparse.parse(open('../fixtures/csv/testData.csv'), {
// 		header: true,
// 	}).data
// })

// export let options = {
// 	stages: [{ duration: '5s', target: 1 }],
// }

export default function () {
	// Pick a random username/password pair

	for (var i = 0; i < 100; i++) {
		// console.log('Brfore' + i)
		// sleep(1)
		// console.log('After' + i)

		// for (var userPwdPair of csvData) {
		// }
		//console.log(JSON.stringify(userPwdPair.email))

		//let randomUser = csvData[Math.floor(Math.random() * csvData.length)]

		// let randomUser = csvData[0]

		// console.log('Random User: ', JSON.stringify(randomUser.email))
		const now = Date.now()

		//var timeStamp = console.log('Log Time: 'Date.now())
		// var payLoad = JSON.stringify({
		// 	address: {
		// 		addressline1: '3003 Washington Blvd',
		// 		addressline2: 'Ste 1000',
		// 		addressline3: '',
		// 		city: 'Arlington',
		// 		country: 'USA',
		// 		state: 'VA',
		// 		zip: '22225',
		// 	},
		// 	birthdate: '07/12/1975',
		// 	email: userPwdPair.email,
		// 	firstname: 'wnDmfZSSOm',
		// 	lastname: 'App1_LN',
		// 	phone: {
		// 		countrycode: '+1',
		// 		number: '9872543211',
		// 	},
		// 	applicantType: 'FY',
		// 	startYear: '0',
		// 	bypassUI: true,
		// 	password: userPwdPair.password,
		// 	registrationType: '7',
		// 	canCollegeCommunicate: false,
		// 	canCommonAppCommunicate: false,
		// 	euStatus: 0,
		// })

		// var params = {
		// 	headers: {
		// 		'Content-Type': constentType,
		// 		Authorization: applicantToken,
		// 		'x-api-key': xapikey,
		// 		Origin: origin,
		// 		Host: host,
		// 	},
		// }
		//const response = postCall(apiPartner, payLoad, params)

		//console.log('API Response Body: ' + response)
		http.get('https://test.k6.io/contacts.php')
		console.log(Date.now() - now)
	}
}
