import { applicantToken } from "../http_constraints/web_constraints.js";
import postCall  from "../http_calls/post_call.js";
import getApisMetaData from './getAllApis.js';
import { check,sleep } from 'k6';
import getCall  from '../http_calls/get_call.js'
import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js'
import { SharedArray } from 'k6/data'


export let options = {
  vus: 2,
  duration: '1s',
};

const csvData = new SharedArray('Users data', function () {
	// Load CSV file and parse it using Papa Parse
	return papaparse.parse(open('../data/usersData.csv'), {
		header: true,
	}).data
})

export default function () {
    let AfterLoginAPIs = getApisMetaData("AfterLoginAPIs");

    // for (let index = 0; index < csvData.length; index++) {
        const element = csvData[1]; 

        // get verification code
        const verificationAPI = AfterLoginAPIs[0];
        verificationAPI.RequestBody.phone_number = element.phonenumber;
        var verificationAPIResponse = postCall(verificationAPI.RequestURL,verificationAPI.RequestBody);
        //sleep(10)
        check(verificationAPIResponse, {
            "Status for Create Phone number Response ": r => r.status == 201
        });
        var verificationCode = JSON.parse(verificationAPIResponse.body).verification_code;

        // User Login API
        const loginAPI = AfterLoginAPIs[1];
        loginAPI.RequestBody.phone_number = element.phonenumber;
        loginAPI.RequestBody.verification_code = verificationCode;
        loginAPI.RequestBody.password = "123456";
        var loginAPIResponse = postCall(loginAPI.RequestURL,loginAPI.RequestBody);
        console.log('Login API REspionse',JSON.stringify(loginAPIResponse));
        //sleep(10)
        check(loginAPIResponse, {
        "Status for Login API Response ": r => r.status == 200
        });
        var AuthenticationToken = JSON.parse(loginAPIResponse.body).token;
        console.log('AuthenticationToken',AuthenticationToken);

        // if(AuthenticationToken != undefined){
        // //get my user details API
        // const userDetailsAPI = AfterLoginAPIs[2];
        // userDetailsAPI.RequestHeaders.headers.Authorization = `Token ${AuthenticationToken}`;
        // var userDetailsAPIResponse = getCall(userDetailsAPI.RequestURL,userDetailsAPI.RequestHeaders);
        // //sleep(10)
        // check(userDetailsAPIResponse, {
        // "Status for User Account details API Response ": r => r.status == 200
        // });
        // var Accounts = JSON.parse(userDetailsAPIResponse.body).accounts;

        // if(Accounts != undefined){
        //     var accountID = Accounts[0].id;

        //     //This endpoint returns if an account has an open qube, if list of qubes are updated, if cloud balance is changed since given time, or the last minute, if card fund deposit is available, and the total bill qube balance and budget.
        //     const accountUpdatesAPI = AfterLoginAPIs[3];
        //     accountUpdatesAPI.RequestURL = accountUpdatesAPI.RequestURL.replace("{account_id}", accountID);
        //     accountUpdatesAPI.RequestHeaders.headers.Authorization = `Token ${AuthenticationToken}`;
        //     console.log('Account updates api body', JSON.stringify(accountUpdatesAPI));
        //     var accountUpdatesAPIResponse = getCall(accountUpdatesAPI.RequestURL,accountUpdatesAPI.RequestHeaders);
        //     //sleep(10)
        //     console.log('api response',JSON.stringify(accountUpdatesAPIResponse));
        //     check(accountUpdatesAPIResponse, {
        //     "Status for Account updates API Response ": r => r.status == 200
        //     });

            
        //     //get qubes list
        //     const qubesListAPI = AfterLoginAPIs[4];
        //     qubesListAPI.RequestHeaders.headers.Authorization = `Token ${AuthenticationToken}`;
        //     var qubesListAPIResponse = getCall(qubesListAPI.RequestURL,qubesListAPI.RequestHeaders);
        //     //sleep(10)
        //     check(qubesListAPIResponse, {
        //     "Status for Qubes list API Response ": r => r.status == 200
        //     });
        //     console.log('api qubes list response',JSON.stringify(qubesListAPIResponse));

        //     //get open qubes
        //     const openQubesAPI = AfterLoginAPIs[5];
        //     openQubesAPI.RequestHeaders.headers.Authorization = `Token ${AuthenticationToken}`;
        //     openQubesAPI.RequestURL = openQubesAPI.RequestURL.replace("{account_id}", accountID);
        //     var openQubesAPIResponse = getCall(openQubesAPI.RequestURL,openQubesAPI.RequestHeaders);
        //     //sleep(10)
        //     check(openQubesAPIResponse, {
        //     "Status for open qubes API Response ": r => r.status == 200
        //     });
        //     console.log('api open qubes response',JSON.stringify(openQubesAPIResponse));


        //     // get transactions list
        //     const transactionListAPI = AfterLoginAPIs[6];
        //     transactionListAPI.RequestHeaders.headers.Authorization = `Token ${AuthenticationToken}`;
        //     var transactionListAPIResponse = getCall(transactionListAPI.RequestURL,transactionListAPI.RequestHeaders);
        //     //sleep(10)
        //     check(transactionListAPIResponse, {
        //     "Status for transactions list API Response ": r => r.status == 200
        //     });
        //     console.log('api transactions list response',JSON.stringify(transactionListAPIResponse));

        //     }
        // }
    // }
}