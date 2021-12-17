export const hosApiBaseURL = 'https://staging.goqube.io/'

//auth Token for Create Applicant
export const applicantToken = 'Token 07bfbe9ad395b7026241f87086a993118399844c'

export const allApis = [{
    "RequestURL":"https://staging.goqube.io/api/accounts/3347557908480428292/cards/",
    "RequestBody": [
        {
          "id": "string",
          "card_number": "string",
          "is_active": true,
          "is_frozen": true,
          "status": "active",
          "deactivated_date": "string",
          "card_holder_name": "string",
          "last_four_digits": "string"
        }
      ],
      "RequestHeaders":{
        "headers":{
          "Authorization":"String"
        }
      },
      "RequestType": "GET"

},
{
  "RequestURL":"https://staging.goqube.io/api/users/accept-terms-and-conditions/",
  "RequestBody": {
    "terms_and_conditions_accepted": true,
    "privacy_policy_accepted": true
  },
    "RequestHeaders":{
      "headers":{
        "Authorization":"String"
      }
    },
    "RequestType": "POST"

},
{
  "RequestURL":"https://staging.goqube.io/api/users/authenticate-with-verification-code/",
  "RequestBody": {
    "phone_number": "string",
    "passcode": "string",
    "verification_code": "string",
    "device": {
      "os": "ios",
      "os_version": "string",
      "device_manufacturer": "string",
      "device_model": "string",
      "device_unique_id": "string",
      "app_name": "string",
      "app_version": "string"
    }
  },
    "RequestHeaders":{
      "headers":{
        "Authorization":"String"
      }
    },
    "RequestType": "POST"
},
{
  "RequestURL":"https://staging.goqube.io/api/users/change-passcode/",
  "RequestBody": {
    "old_passcode": "string",
    "new_passcode": "string"
  },
    "RequestHeaders":{
      "headers":{
        "Authorization":"String"
      }
    },
    "RequestType": "POST"
},
{
  "RequestURL":"https://staging.goqube.io/api/users/emails/Vanessa_Wade@encom.org/",
  "RequestBody": {
    "old_passcode": "string",
    "new_passcode": "string"
  },
    "RequestHeaders":{
      "headers":{
        "Authorization":"String"
      }
    },
    "RequestType": "GET"
},
{
  "RequestURL":"https://staging.goqube.io/api/users/forgot-password/",
  "RequestBody": {
    "email": "Vanessa_Wade@encom.org"
  },
    "RequestHeaders":{
      "headers":{
        "Authorization":"String"
      }
    },
    "RequestType": "POST"
},
{
  "RequestURL":"https://staging.goqube.io/api/users/forgot-password/change/",
  "RequestBody": {
    "forgot_password_key": "string",
    "new_password": "string"
  },
    "RequestHeaders":{
      "headers":{
        "Authorization":"String"
      }
    },
    "RequestType": "POST"
},
{
  "RequestURL":"https://staging.goqube.io/api/users/me/",
  "RequestBody": {
  },
    "RequestHeaders":{
      "headers":{
        "Authorization":"String"
      }
    },
    "RequestType": "GET"
},
{
  "RequestURL":"https://staging.goqube.io/api/users/me/",
  "RequestBody": {
    "avatar": "http://example.com",
    "email": "anessa_Wade@encom.org",
    "phone_number": "string",
    "phone_number_token": "string",
    "are_push_notifications_allowed": true
  },
    "RequestHeaders":{
      "headers":{
        "Authorization":"String"
      }
    },
    "RequestType": "GET"
}]

export const onBoardingAPIs = [{
  Name:"onboarding_first_name_last_name_email_create",
  RequestURL:"https://staging.goqube.io/api/onboarding/first-name-last-name-email/",
  RequestBody: {},
    RequestHeaders:{
      headers:{
      }
    },
    RequestType: "POST"
},
{
  Name:"onboarding_phone_numbers_create",
  RequestURL:"https://staging.goqube.io/api/onboarding/phone-numbers/",
  RequestBody: {},
    RequestHeaders:{
      headers:{
      }
    },
    RequestType: "POST"
},
{
  Name:"onboarding_phone_numbers_verify_create",
  RequestURL:"hhttps://staging.goqube.io/api/onboarding/phone-numbers/verify/",
  RequestBody: {},
    RequestHeaders:{
      headers:{
      }
    },
    RequestType: "POST"
},
{
  Name:"onboarding_plan_create",
  RequestURL:"https://staging.goqube.io/api/onboarding/plan/",
  RequestBody: {},
    RequestHeaders:{
      headers:{
      }
    },
    RequestType: "POST"
},
{
  Name:"onboarding_passcode_create",
  RequestURL:"https://staging.goqube.io/api/onboarding/passcode/",
  RequestBody: {},
    RequestHeaders:{
      headers:{
      }
    },
    RequestType: "POST"
},
{
  Name:"onboarding_debit_card_selection_create",
  RequestURL:"https://staging.goqube.io/api/onboarding/debit-card-selection/",
  RequestBody: {},
    RequestHeaders:{
      headers:{
      }
    },
    RequestType: "POST"
},
{
  Name:"onboarding_mailing_address_create",
  RequestURL:"https://staging.goqube.io/api/onboarding/mailing-address/",
  RequestBody: {},
    RequestHeaders:{
      headers:{
      }
    },
    RequestType: "POST"
},
{
  Name:"onboarding_birth_date_ssn_create",
  RequestURL:"https://staging.goqube.io/api/onboarding/birth-date-ssn/",
  RequestBody: {},
    RequestHeaders:{
      headers:{
      }
    },
    RequestType: "POST"
},
{
  Name:"onboarding_summary_create",
  RequestURL:"https://staging.goqube.io/api/onboarding/summary/",
  RequestBody: {},
    RequestHeaders:{
      headers:{
      }
    },
    RequestType: "POST"
}
]