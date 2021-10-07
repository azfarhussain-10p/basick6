import getAuthToken from '../http_scenarios/getAuthToken.js'
import createAnApplicantAccount from '../http_scenarios/createAnApplicantTestAccount.js'
import { group } from 'k6'

export default function () {
	group('Create Applicant Account', function () {
		let responseToken = getAuthToken()
		group('Aurthentication User: Create Account', function () {
			createAnApplicantAccount(responseToken)
		})
	})
}
