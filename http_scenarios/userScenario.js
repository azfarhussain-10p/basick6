import { applicantToken } from "../http_constraints/web_constraints.js";
import postCall  from "../http_calls/post_call.js";
import getApisMetaData from './getAllApis.js';
import { check } from 'k6';
import { SharedArray } from 'k6/data'
import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js'
import getCall from "../http_calls/get_call.js";
import putCall from "../http_calls/put_call.js"; 

export let options = {
  vus: 250,
  duration: '300s',
};

const csvData = new SharedArray('Users data', function () {
	// Load CSV file and parse it using Papa Parse
	return papaparse.parse(open('../data/usersData.csv'), {
		header: true,
	}).data
})

export default function () {
    let usersAPI = getApisMetaData("users");
    const element = csvData[1]; 

    // get verification code
    const verificationAPI = usersAPI[0];
    verificationAPI.RequestBody.phone_number = element.phonenumber;
    var verificationAPIResponse = postCall(verificationAPI.RequestURL,verificationAPI.RequestBody);
    //sleep(10)
    check(verificationAPIResponse, {
        "Status for Create Phone number Response ": r => r.status == 201
    });
    var verificationCode = JSON.parse(verificationAPIResponse.body).verification_code;
    console.log('verificationCode',verificationCode);

    // User Login API
    const loginAPI = usersAPI[1];
    loginAPI.RequestBody.phone_number = element.phonenumber;
    loginAPI.RequestBody.verification_code = verificationCode;
    console.log('request body', JSON.stringify(loginAPI));
    var loginAPIResponse = postCall(loginAPI.RequestURL,loginAPI.RequestBody);
    console.log('Login API REspionse',JSON.stringify(loginAPIResponse));
    check(loginAPIResponse, {
    "Status for Login API Response ": r => r.status == 200
    });
    var AuthenticationToken = JSON.parse(loginAPIResponse.body).token;
    console.log('AuthenticationToken',AuthenticationToken);

    if(AuthenticationToken != undefined){
    // accept terms and conditions
    const userAcceptTermsConditions = usersAPI[2];
    userAcceptTermsConditions.RequestHeaders.headers.Authorization = `Token ${AuthenticationToken}`;
    var userAcceptTermsConditionsAPIResponse = postCall(userAcceptTermsConditions.RequestURL,userAcceptTermsConditions.RequestBody,userAcceptTermsConditions.RequestHeaders);
    check(userAcceptTermsConditionsAPIResponse, {
    "Status for accept terms and conditions API Response ": r => r.status == 201
    });
    console.log('userAcceptTermsConditionsAPIResponse ', JSON.stringify(userAcceptTermsConditionsAPIResponse));

    // // authenticate verification code
    // const authenticateVerificationCode = usersAPI[3];
    // authenticateVerificationCode.RequestBody.phone_number = element.phonenumber;
    // authenticateVerificationCode.RequestBody.verification_code = verificationCode;
    // authenticateVerificationCode.RequestHeaders.headers.Authorization = `Token ${AuthenticationToken}`;
    // var authenticateVerificationCodeAPIResponse = postCall(authenticateVerificationCode.RequestURL,authenticateVerificationCode.RequestBody,authenticateVerificationCode.RequestHeaders);
    // check(authenticateVerificationCodeAPIResponse, {
    // "Status for authenticate verification code API Response ": r => r.status == 200
    // });
    // console.log('authenticateVerificationCodeAPIResponse ', JSON.stringify(authenticateVerificationCodeAPIResponse));

    // chagne passcode api
    // const changePasscodeAPI = usersAPI[4];
    // changePasscodeAPI.RequestHeaders.headers.Authorization = `Token ${AuthenticationToken}`;
    // var changePasscodeAPIResponse = postCall(changePasscodeAPI.RequestURL,changePasscodeAPI.RequestBody,changePasscodeAPI.RequestHeaders);
    // check(changePasscodeAPIResponse, {
    // "Status for chagne passcode api Response ": r => r.status == 200
    // });
    // console.log('changePasscodeAPIResponse', JSON.stringify(changePasscodeAPIResponse));


    
    //check email exists
    const usersEmailExistCheck = usersAPI[5];
    usersEmailExistCheck.RequestHeaders.headers.Authorization = `Token ${AuthenticationToken}`;
    var usersEmailExistCheckAPIResponse = getCall(usersEmailExistCheck.RequestURL,usersEmailExistCheck.RequestHeaders);
    check(usersEmailExistCheckAPIResponse, {
    "Status for email exist check api Response ": r => r.status == 200
    });
    console.log('usersEmailExistCheckAPIResponse', JSON.stringify(usersEmailExistCheckAPIResponse));

    // //users forgot password create
    // const userForgotPassCreateAPI = usersAPI[6];
    // userForgotPassCreateAPI.RequestHeaders.headers.Authorization = `Token ${AuthenticationToken}`;
    // var userForgotPassCreateAPIResponse = postCall(userForgotPassCreateAPI.RequestURL,userForgotPassCreateAPI.RequestBody,userForgotPassCreateAPI.RequestHeaders);
    // check(userForgotPassCreateAPIResponse, {
    // "Status for user forgot passcode api Response ": r => r.status == 200
    // });
    // console.log('userForgotPassCreateAPIResponse', JSON.stringify(userForgotPassCreateAPIResponse));


    //users user update
    // const userUpdateAPI = usersAPI[9];
    // userUpdateAPI.RequestHeaders.headers.Authorization = `Token ${AuthenticationToken}`;
    // var userUpdateAPIResponse = putCall(userUpdateAPI.RequestURL,userUpdateAPI.RequestBody,userUpdateAPI.RequestHeaders);
    // check(userUpdateAPIResponse, {
    // "Status for user update api Response ": r => r.status == 200
    // });
    // console.log('userUpdateAPIResponse', JSON.stringify(userUpdateAPIResponse));


    // //user search
    // const userSearchApi = usersAPI[10];
    // userSearchApi.RequestHeaders.headers.Authorization = `Token ${AuthenticationToken}`;
    // var userSearchApiResponse = getCall(userSearchApi.RequestURL,userSearchApi.RequestHeaders);
    // check(userSearchApiResponse, {
    // "Status for user search api Response ": r => r.status == 200
    // });
    // console.log('userSearchApiResponse', JSON.stringify(userSearchApiResponse));

    //users card activate create
    const cardActivateAPI = usersAPI[11];
    cardActivateAPI.RequestHeaders.headers.Authorization = `Token ${AuthenticationToken}`;
    cardActivateAPI.RequestURL = cardActivateAPI.RequestURL.replace("{account_id}", element.accountid);
    var cardActivateAPIResponse = getCall(cardActivateAPI.RequestURL,cardActivateAPI.RequestHeaders);
    check(cardActivateAPIResponse, {
    "Status for account lists api Response ": r => r.status == 200
    });
    console.log('cardActivateAPIResponse', JSON.stringify(cardActivateAPIResponse));
    }
}