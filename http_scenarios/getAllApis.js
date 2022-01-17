import { UsersApis,withFlowAPIs,CreateUserAPIs,usersAPIs,AfterLoginAPIs } from "../http_constraints/web_constraints.js"

export default function getApisMetaData(process) {
	if(process == "onboarding"){
		for (let index = 0; index < CreateUserAPIs.length; index++) {
			const element = CreateUserAPIs[index];
			switch (element.Name) {
				case "onboarding_first_name_last_name_email_create":
					var body = {
						first_name: `UserFirstName${__VU}_${__ITER}`,
						last_name: `UserLastName${__VU}_${__ITER}`,
						email: `User${__VU}_${__ITER}@gmail.com`
					  }
					  CreateUserAPIs[index].RequestBody = body;
					break;
				case "onboarding_phone_numbers_create":
					var body = {
						phone_number: `800-795-00${__VU}${__ITER}`	
					  }
					  CreateUserAPIs[index].RequestBody = body;
					break;
				case "onboarding_phone_numbers_verify_create":
					var body = {
						phone_number: `800-795-00${__VU}${__ITER}`,
						verification_code: ""	
					}
					CreateUserAPIs[index].RequestBody = body;
					break;
				case "onboarding_plan_create":
					var body = {
						"id": "string",
						"is_debit_card_requested": true,
						"is_joint_account_invitation_requested": false,
						"plan_selection": "premium",
						"billing_frequency": "monthly"
					  }
					  CreateUserAPIs[index].RequestBody = body;
					break;
				case "onboarding_passcode_create":
					var body = {
						"id": "string",
						"passcode": `123456`
					  }
					  CreateUserAPIs[index].RequestBody = body;
					break;
				case "onboarding_debit_card_selection_create":
					var body = {
						"id": "string",
						"debit_card_design": "white"
					  }
					  CreateUserAPIs[index].RequestBody = body;
					break;
				case "onboarding_mailing_address_create":
					var body = {
						"id": "string",
						"address_street": `deliverable`,
						"address_city": `London ${__VU}${__ITER}`,
						"address_state": `UK`,
						"address_postal_code": `11111`,
						"address_apartment_no": `A50-${__VU}${__ITER}`
					  }
					  CreateUserAPIs[index].RequestBody = body; 
					break;
				case "onboarding_birth_date_ssn_create":
					var body = {
						"id": "string",
						"birth_date": `2000-${__VU}-24`,
						"social_security_number": "123456789"
					  }
					  CreateUserAPIs[index].RequestBody = body; 
					break; 
				case "onboarding_summary_create":
					var body = {
						"id": "string",
						"is_terms_and_conditions_accepted": true,
						"is_privacy_policy_accepted": true
					  }
					  CreateUserAPIs[index].RequestBody = body;
					break;
				
				default:
					break;
			}
		}
		return CreateUserAPIs;
	}
	else if(process == "AfterLoginAPIs"){
		for (let index = 0; index < AfterLoginAPIs.length; index++) {
			const element = AfterLoginAPIs[index];
			switch (element.Name) {
					case "onboarding_phone_numbers_create":
					var body = {
						phone_number: ""	
					  }
					  AfterLoginAPIs[index].RequestBody = body;
					break;
					case "web_users_login_create":
						var body = {
							"phone_number": "",
							"verification_code": "00000",
							"password": "123456",
							"device": {
							  "os": "ios",
							  "os_version": "14.0.0",
							  "device_manufacturer": "apple",
							  "device_model": "1",
							  "device_unique_id": `121${__VU}${__ITER}`,
							  "app_name": "QubeMoney",
							  "app_version": "1.0.0"
							}
						  }
						  AfterLoginAPIs[index].RequestBody = body;
					break;
					case "accounts_open_qube_create":
						var body = {
							"open_qube": 0,
							"expires_in": 1,
							"close_qube_after_next_purchase": true,
							"multi_qube_payments": [
							  {
								"qube": 0,
								"amount": `100${__VU}`
							  }
							],
							"remaining_purchases": 0
						  }
						  AfterLoginAPIs[index].RequestBody = body;
					break;
					case "qubes_create":
						var body = {
							"name": `Test Qube From User ${__VU}`,
							"description": "This is test qube from laod testing"
						  }
						  AfterLoginAPIs[index].RequestBody = body;
					break;
					case "qubes_bill_qubes_create":
						var body = {
							"name": "test bill qube",
							"description": "this is test bill qube form load test",
							"payment_method":"ach",
							"payment_frequency":"daily"
						  }
						  AfterLoginAPIs[index].RequestBody = body;
					break;
					case "users_verify_passcode_create":
						var body = {
							"passcode": "123456"
						  }
						  AfterLoginAPIs[index].RequestBody = body;
					break;
					case "qubes_transfer_create":
						var body = {
							"id": "string",
							"payment_authorization": {
							  "id": "string",
							  "payee": {
								"merchant_id": "string",
								"merchant_location": "string",
								"mcc": "string"
							  },
							  "transaction_datetime": "2019-08-24T14:15:22Z"
							},
							"settlement": {
							  "id": "string",
							  "merchant": {
								"merchant_id": "string",
								"merchant_location": "string",
								"mcc": "string"
							  },
							  "transaction_datetime": "2019-08-24T14:15:22Z"
							},
							"account_transfer": {
							  "id": "string",
							  "to_account_id": "string",
							  "transaction_datetime": "2019-08-24T14:15:22Z"
							},
							"ach_transfer": {
							  "id": "string",
							  "transaction_datetime": "2019-08-24T14:15:22Z"
							},
							"received_ach_transfer": {
							  "id": "string",
							  "transaction_datetime": "2019-08-24T14:15:22Z"
							},
							"qube_transfer": {
							  "id": "string",
							  "from_qube": {
								"name": "string",
								"color": {
								  "foreground_color": "string",
								  "background_color": "string"
								},
								"icon": {
								  "type": "billing",
								  "name": "string",
								  "keywords": [
									"string"
								  ],
								  "icon": "http://example.com"
								}
							  },
							  "to_qube": {
								"name": "string",
								"color": {
								  "foreground_color": "string",
								  "background_color": "string"
								},
								"icon": {
								  "type": "billing",
								  "name": "string",
								  "keywords": [
									"string"
								  ],
								  "icon": "http://example.com"
								}
							  },
							  "transaction_datetime": "2019-08-24T14:15:22Z"
							},
							"preapproved_payment": {
							  "id": "string",
							  "payee": {
								"merchant_id": "string",
								"merchant_location": "string",
								"mcc": "string"
							  },
							  "merchant": {},
							  "transaction_datetime": "2019-08-24T14:15:22Z"
							},
							"preapproved_payment_completion": {
							  "id": "string",
							  "transaction_datetime": "2019-08-24T14:15:22Z"
							},
							"transaction_datetime": "2019-08-24T14:15:22Z",
							"fee": {
							  "id": "string",
							  "transaction_datetime": "2019-08-24T14:15:22Z",
							  "amount": "string",
							  "description": "string"
							}
						  }
						  AfterLoginAPIs[index].RequestBody = body;
					break;
					case "devices_create":
						var body = {
							"push_token": "ewkqjrhq",
							"platform": "web",
							"model": "",
							"locale": ""
						  }
						  AfterLoginAPIs[index].RequestBody = body;
					break;					
					
				default:
					break;
			}
		}
		return AfterLoginAPIs;
	}
	else if(process == "all"){
		for (let index = 0; index < UsersApis.length; index++) {
			const element = array[index];
			switch (element.Name) {
				case "onboarding_summary_create":
					var body = {
						"id": "string",
						"is_terms_and_conditions_accepted": true,
						"is_privacy_policy_accepted": true
					  }
					  allApis[index].RequestBody = body;
					break;
				default:
					break;
			}

		}
		return allApis
	}
	else if(process == "users"){
		for (let index = 0; index < UsersApis.length; index++) {
			const element = UsersApis[index];
			switch (element.Name) {
				case "web_users_login_create":
					var body = {
						"phone_number": "",
						"verification_code": "00000",
						"password": "123456",
						"device": {
							"os": "ios",
							"os_version": "14.0.0",
							"device_manufacturer": "apple",
							"device_model": "1",
							"device_unique_id": `121${__VU}${__ITER}`,
							"app_name": "QubeMoney",
							"app_version": "1.0.0"
						}
						}
						UsersApis[index].RequestBody = body;
				break;
				case "authenticate-with-verification-code":
					UsersApis[index].RequestBody.device_unique_id = `121${__VU}${__ITER}`;
					break;
				default:
					break;
			}

		}
		return UsersApis
	}




						



						
}

