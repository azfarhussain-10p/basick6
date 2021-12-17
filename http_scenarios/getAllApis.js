import { allApis,onBoardingAPIs } from "../http_constraints/web_constraints.js"

export default function getApisMetaData(process) {
	let body = {};
	if(process == "onboarding"){
		for (let index = 0; index < onBoardingAPIs.length; index++) {
			const element = onBoardingAPIs[index];
			switch (element.Name) {
				case "onboarding_first_name_last_name_email_create":
					body = {
						first_name: `UserFirstName${__VU}_${__ITER}`,
						last_name: `UserLastName${__VU}_${__ITER}`,
						email: `User${__VU}_${__ITER}@gmail.com`
					  }
					onBoardingAPIs[index].RequestBody = body;
				case "onboarding_phone_numbers_create":
					body = {
						phone_number: `${__VU}${__ITER}`	
					  }
					onBoardingAPIs[index].RequestBody = body;
				case "onboarding_phone_numbers_verify_create":
					body = {
						phone_number: `${__VU}${__ITER}`,
						verification_code: ""	
					}
					onBoardingAPIs[index].RequestBody = body;
				case "onboarding_plan_create":
					body = {
						"id": "string",
						"is_debit_card_requested": true,
						"is_joint_account_invitation_requested": true,
						"plan_selection": "PLAN_SELECTION_FREE",
						"billing_frequency": "monthly"
					  }
					onBoardingAPIs[index].RequestBody = body;
				case "onboarding_passcode_create":
					body = {
						"id": "string",
						"passcode": `password${__VU}${__ITER}`
					  }
					onBoardingAPIs[index].RequestBody = body;
				case "onboarding_debit_card_selection_create":
					body = {
						"id": "string",
						"debit_card_design": "white"
					  }
					onBoardingAPIs[index].RequestBody = body;
				case "onboarding_mailing_address_create":
					body = {
						"id": "string",
						"address_street": `Street no X-${__VU}${__ITER}`,
						"address_city": `London ${__VU}_${__ITER}`,
						"address_state": `UK ${__VU}_${__ITER}`,
						"address_postal_code": `2323${__VU}_${__ITER}`,
						"address_apartment_no": `A50-${__VU}_${__ITER}`
					  }
					onBoardingAPIs[index].RequestBody = body; 
				case "onboarding_birth_date_ssn_create":
					body = {
						"id": "string",
						"birth_date": "2019-08-24",
						"social_security_number": "123456789"
					  }
					onBoardingAPIs[index].RequestBody = body; 
					 
				case "onboarding_summary_create":
					body = {
						"id": "string",
						"is_terms_and_conditions_accepted": true,
						"is_privacy_policy_accepted": true
					  }
					onBoardingAPIs[index].RequestBody = body;
				default:
					break;
			}
		}
		return onBoardingAPIs;
	}
	else if(process == "all"){
		return allApis
	}

}

