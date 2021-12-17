// export const hosApiBaseURL = 'https://staging.goqube.io/api/'
export const hosApiBaseURL = 'http://localhost:8000/api/'

//auth Token for Create Applicant
export const applicantToken = 'Token 07bfbe9ad395b7026241f87086a993118399844c'

export const allApis = [
{
  "RequestURL":`${hosApiBaseURL}users/accept-terms-and-conditions/`,
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
  "RequestURL":`${hosApiBaseURL}users/authenticate-with-verification-code/`,
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
  "RequestURL":`${hosApiBaseURL}users/change-passcode/`,
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
  "RequestURL":`${hosApiBaseURL}users/emails/Vanessa_Wade@encom.org/`,
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
  "RequestURL":`${hosApiBaseURL}users/forgot-password/`,
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
  "RequestURL":`${hosApiBaseURL}users/forgot-password/change/`,
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
  "RequestURL":`${hosApiBaseURL}users/me/`,
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
  "RequestURL":`${hosApiBaseURL}users/me/`,
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

export const AfterLoginAPIs = [
{
  Name:"onboarding_phone_numbers_create",
  RequestURL:`${hosApiBaseURL}onboarding/phone-numbers/`,
  RequestBody: {},
    RequestHeaders:{
      headers:{
      }
    },
    RequestType: "POST"
},
{
  Name: "web_users_login_create",
  RequestURL:`${hosApiBaseURL}web/users/login/`,
  RequestBody: {},
    RequestHeaders:{
      headers:{
      }
    },
    RequestType: "POST"
},
{
  Name:"web_users_me_retrieve",
  RequestURL:`${hosApiBaseURL}users/me/`,
  RequestBody: {},
    RequestHeaders:{
      headers:{
        Authorization: ""
      }
    },
    RequestType: "GET"
},
{
  Name:"accounts_updates_retrieve",
  RequestURL:`${hosApiBaseURL}accounts/{account_id}/updates/`,
  RequestBody: {},
    RequestHeaders:{
      headers:{
        Authorization: ""
      }
    },
    RequestType: "GET"
},
{
  Name:"qubes_list",
  RequestURL:`${hosApiBaseURL}qubes/?account_id={account_id}`,
  RequestBody: {},
    RequestHeaders:{
      headers:{
        Authorization: ""
      }
    },
    RequestType: "GET"
},
{
  Name:"accounts_open_qube_retrieve",
  RequestURL:`${hosApiBaseURL}accounts/{account_id}/open-qube/`,
  RequestBody: {},
    RequestHeaders:{
      headers:{
        Authorization: ""
      }
    },
    RequestType: "GET"
},
{
  Name:"search_transactions_list",
  RequestURL:`${hosApiBaseURL}search/transactions?filter_date_range=all&account_id={account_id}`,
  RequestBody: {},
    RequestHeaders:{
      headers:{
        Authorization: ""
      }
    },
    RequestType: "GET"
},
{
  Name:"qubes_spend_qubes_list",
  RequestURL:`${hosApiBaseURL}qubes/spend-qubes/?account_id={account_id}`,
  RequestBody: {},
    RequestHeaders:{
      headers:{
        Authorization: ""
      }
    },
    RequestType: "GET"
},
{
  Name:"accounts_cards_list",
  RequestURL:`${hosApiBaseURL}accounts/{account_id}/cards/`,
  RequestBody: {},
    RequestHeaders:{
      headers:{
        Authorization: ""
      }
    },
    RequestType: "GET"
},
{
  Name:"qubes_retrieve",
  RequestURL:`${hosApiBaseURL}qubes/{QubeID}/?account_id={account_id}`,
  RequestBody: {},
    RequestHeaders:{
      headers:{
        Authorization: ""
      }
    },
    RequestType: "GET"
},
{
  Name: "qubes_create",
  RequestURL:`${hosApiBaseURL}qubes/?account_id={account_id}`,
  RequestBody: {},
    RequestHeaders:{
      headers:{
      }
    },
    RequestType: "POST"
},
{
  Name: "qubes_bill_qubes_create",
  RequestURL:`${hosApiBaseURL}qubes/bill-qubes/?account_id={account_id}`,
  RequestBody: {},
    RequestHeaders:{
      headers:{
      }
    },
    RequestType: "POST"
},
{
  Name: "qubes_bill_qubes_list",
  RequestURL:`${hosApiBaseURL}qubes/bill-qubes/?account_id={account_id}`,
  RequestBody: {},
    RequestHeaders:{
      headers:{
      }
    },
    RequestType: "GET"
},
{
  Name: "notifications_list",
  RequestURL:`${hosApiBaseURL}notifications/?account_id={account_id}`,
  RequestBody: {},
    RequestHeaders:{
      headers:{
      }
    },
    RequestType: "GET"
},
{
  Name: "qubes_icons_list",
  RequestURL:`${hosApiBaseURL}qubes/icons/?account_id={account_id}`,
  RequestBody: {},
    RequestHeaders:{
      headers:{
      }
    },
    RequestType: "GET"
},
{
  Name: "qubes_colors_list",
  RequestURL:`${hosApiBaseURL}qubes/colors/?account_id={account_id}`,
  RequestBody: {},
    RequestHeaders:{
      headers:{
      }
    },
    RequestType: "GET"
},
{
  Name: "orders_list",
  RequestURL:`${hosApiBaseURL}orders/?account_id={account_id}`,
  RequestBody: {},
    RequestHeaders:{
      headers:{
      }
    },
    RequestType: "GET"
},
{
  Name: "plaid_accounts_list",
  RequestURL:`${hosApiBaseURL}plaid/accounts/?account_id={account_id}`,
  RequestBody: {},
    RequestHeaders:{
      headers:{
      }
    },
    RequestType: "GET"
},
{
  Name: "search_scheduled_list",
  RequestURL:`${hosApiBaseURL}search/scheduled/?account_id={account_id}`,
  RequestBody: {},
    RequestHeaders:{
      headers:{
      }
    },
    RequestType: "GET"
},
{
  Name: "users_verify_passcode_create",
  RequestURL:`${hosApiBaseURL}users/verify-passcode/?account_id={account_id}`,
  RequestBody: {},
    RequestHeaders:{
      headers:{
      }
    },
    RequestType: "POST"
},
{
  Name: "qubes_transfer_create",
  RequestURL:`${hosApiBaseURL}qubes/transfer/?account_id={account_id}`,
  RequestBody: {},
    RequestHeaders:{
      headers:{
      }
    },
    RequestType: "POST"
},
{
  Name: "web_joint_account_invitations_me_retrieve",
  RequestURL:`${hosApiBaseURL}web/joint-account-invitations/me/?account_id={account_id}`,
  RequestBody: {},
    RequestHeaders:{
      headers:{
      }
    },
    RequestType: "GET"
},
{
  Name: "accounts_retrieve",
  RequestURL:`${hosApiBaseURL}accounts/{account_id}`,
  RequestBody: {},
    RequestHeaders:{
      headers:{
      }
    },
    RequestType: "GET"
},
{
  Name: "accounts_card_image_retrieve",
  RequestURL:`${hosApiBaseURL}accounts/{account_id}/card-image/`,
  RequestBody: {},
    RequestHeaders:{
      headers:{
      }
    },
    RequestType: "GET"
},
{
  Name: "devices_create",
  RequestURL:`${hosApiBaseURL}devices/?account_id={account_id}`,
  RequestBody: {},
    RequestHeaders:{
      headers:{
      }
    },
    RequestType: "POST"
},
{
  Name: "banking_transactions_list",
  RequestURL:`${hosApiBaseURL}banking/transactions/?account_id={account_id}`,
  RequestBody: {},
    RequestHeaders:{
      headers:{
      }
    },
    RequestType: "GET"
}



]

export const CreateUserAPIs = [
{
  Name:"onboarding_first_name_last_name_email_create",
  RequestURL:`${hosApiBaseURL}onboarding/first-name-last-name-email/`,
  RequestBody: {},
    RequestHeaders:{
      headers:{
      }
    },
    RequestType: "POST"
},
{
  Name:"onboarding_phone_numbers_create",
  RequestURL:`${hosApiBaseURL}onboarding/phone-numbers/`,
  RequestBody: {},
    RequestHeaders:{
      headers:{
      }
    },
    RequestType: "POST"
},
{
  Name:"onboarding_phone_numbers_verify_create",
  RequestURL:`${hosApiBaseURL}onboarding/phone-numbers/verify/`,
  RequestBody: {},
    RequestHeaders:{
      headers:{
      }
    },
    RequestType: "POST"
},
{
  Name:"onboarding_plan_create",
  RequestURL:`${hosApiBaseURL}onboarding/plan/`,
  RequestBody: {},
    RequestHeaders:{
      headers:{
      }
    },
    RequestType: "POST"
},
{
  Name:"onboarding_passcode_create",
  RequestURL:`${hosApiBaseURL}onboarding/passcode/`,
  RequestBody: {},
    RequestHeaders:{
      headers:{
      }
    },
    RequestType: "POST"
},
{
  Name:"onboarding_debit_card_selection_create",
  RequestURL:`${hosApiBaseURL}onboarding/debit-card-selection/`,
  RequestBody: {},
    RequestHeaders:{
      headers:{
      }
    },
    RequestType: "POST"
},
{
  Name:"onboarding_mailing_address_create",
  RequestURL:`${hosApiBaseURL}onboarding/mailing-address/`,
  RequestBody: {},
    RequestHeaders:{
      headers:{
      }
    },
    RequestType: "POST"
},
{
  Name:"onboarding_birth_date_ssn_create",
  RequestURL:`${hosApiBaseURL}onboarding/birth-date-ssn/`,
  RequestBody: {},
    RequestHeaders:{
      headers:{
      }
    },
    RequestType: "POST"
},
{
  Name:"onboarding_summary_create",
  RequestURL:`${hosApiBaseURL}onboarding/summary/`,
  RequestBody: {},
    RequestHeaders:{
      headers:{
      }
    },
    RequestType: "POST"
}
]


export const usersAPIs = [{
  Name:"users_accept_terms_and_conditions_create",
  RequestURL:`${hosApiBaseURL}users/accept-terms-and-conditions/`,
  RequestBody: {},
    RequestHeaders:{
      headers:{
      }
    },
    RequestType: "POST"
}
]


// mostly used APIs

// api/accounts/<int:account_id>/updates/
// api/qubes/
// api/users/me/
// api/accounts/<int:account_id>/open-qube/ Giving not found error in staging
// api/search/transactions/$
// api/qubes/spend-qubes/
// api/accounts/<int:account_id>/cards/
// api/qubes/<int:pk>/
// api/qubes/bill-qubes/
// api/notifications/
// api/qubes/icons/
// api/qubes/colors/
// api/orders/
// api/plaid/accounts/
// api/search/scheduled/$
// api/users/verify-passcode/
// api/web/joint-account-invitations/me/
// api/accounts/<int:pk>/
// api/accounts/<int:account_id>/card-image/
// api/devices/$
// api/banking/transactions/





// remaining due to depoendencies
// api/qubes/transfer/


// API documents issue
// Issue in apis required fields like bill qube aPI
// most of the APIs do not mention that they need account id as parameter in query 
// The description of API is not correct, it conflicts with description of other APIs

