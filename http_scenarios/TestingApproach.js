import { applicantToken } from "../http_constraints/web_constraints.js";
import postCall  from "../http_calls/post_call.js";
import getApisMetaData from './getAllApis.js';
import { check,sleep } from 'k6';
import getCall  from '../http_calls/get_call.js'
import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js'
import { SharedArray } from 'k6/data'


export let options = {
  vus: 250,
  duration: '10s',
};
// first 28 user for 5 minutes 2445 request
// second 28 user for 500 seconds 3876
// third, 120 users for 300 seconds
const csvData = new SharedArray('Users data', function () {
	return papaparse.parse(open('../data/usersData.csv'), {
		header: true,
	}).data
})

export default function () {
    let AfterLoginAPIs = getApisMetaData("AfterLoginAPIs");

    //get my user details API
    const userDetailsAPI = AfterLoginAPIs[2];
    userDetailsAPI.RequestHeaders.headers.Authorization = `Token ${csvData[__VU].token}`;
    var userDetailsAPIResponse = getCall(userDetailsAPI.RequestURL,userDetailsAPI.RequestHeaders);
    if(userDetailsAPIResponse.status != 200)
      console.log('api User Account details response',JSON.stringify(userDetailsAPIResponse));
    check(userDetailsAPIResponse, {
    "Status for User Account details API Response ": r => r.status == 200
    });


    // //This endpoint returns if an account has an open qube, if list of qubes are updated, if cloud balance is changed since given time, or the last minute, if card fund deposit is available, and the total bill qube balance and budget.
    // const accountUpdatesAPI = AfterLoginAPIs[3];
    // accountUpdatesAPI.RequestURL = accountUpdatesAPI.RequestURL.replace("{account_id}", csvData[__VU].accountid);
    // accountUpdatesAPI.RequestHeaders.headers.Authorization = `Token ${csvData[__VU].token}`;
    // var accountUpdatesAPIResponse = getCall(accountUpdatesAPI.RequestURL,accountUpdatesAPI.RequestHeaders);
    
    // console.log('Account updates API response',JSON.stringify(accountUpdatesAPIResponse));
    // check(accountUpdatesAPIResponse, {
    // "Status for Account updates API Response ": r => r.status == 200
    // });

    // // Commented due to max number of qubes creation
    // // create qube
    // const createQubeAPI = AfterLoginAPIs[10];
    // createQubeAPI.RequestHeaders.headers.Authorization = `Token ${csvData[__VU].token}`;
    // createQubeAPI.RequestURL = createQubeAPI.RequestURL.replace("{account_id}", csvData[__VU].accountid);
    // var createQubeAPIResponse = postCall(createQubeAPI.RequestURL,createQubeAPI.RequestBody,createQubeAPI.RequestHeaders);
    // console.log('create qube API response',JSON.stringify(createQubeAPIResponse));
    // check(createQubeAPIResponse, {
    // "Status for create qube API Response ": r => r.status == 201
    // });

    // //get qubes list
    // const qubesListAPI = AfterLoginAPIs[4];
    // qubesListAPI.RequestHeaders.headers.Authorization = `Token ${csvData[__VU].token}`;
    // qubesListAPI.RequestURL = qubesListAPI.RequestURL.replace("{account_id}", csvData[__VU].accountid);
    // var qubesListAPIResponse = getCall(qubesListAPI.RequestURL,qubesListAPI.RequestHeaders);  
    // console.log('Qubes list  API response',JSON.stringify(qubesListAPIResponse));
    // check(qubesListAPIResponse, {
    // "Status for Qubes list API Response ": r => r.status == 200
    // });

    // var parsedResponse = JSON.parse(qubesListAPIResponse.body);
    // if(parsedResponse.results){
    //         var qubeID = parsedResponse.results[0].id;
    //         // get qube detail by id
    //         const readQubeDetailsAPI = AfterLoginAPIs[9];
    //         readQubeDetailsAPI.RequestHeaders.headers.Authorization = `Token ${csvData[__VU].token}`;
    //         readQubeDetailsAPI.RequestURL = readQubeDetailsAPI.RequestURL.replace("{account_id}", csvData[__VU].accountid);
    //         readQubeDetailsAPI.RequestURL = readQubeDetailsAPI.RequestURL.replace("{QubeID}", qubeID);
    //         var readQubeDetailsAPIResponse = getCall(readQubeDetailsAPI.RequestURL,readQubeDetailsAPI.RequestHeaders);
            
    //         check(readQubeDetailsAPIResponse, {
    //         "Status for qube detail API Response ": r => r.status == 200
    //         });
    // }

    // //get open qubes
    // // const openQubesAPI = AfterLoginAPIs[5];
    // // openQubesAPI.RequestHeaders.headers.Authorization = `Token ${csvData[__VU].token}`;
    // // openQubesAPI.RequestURL = openQubesAPI.RequestURL.replace("{account_id}", csvData[__VU].accountid);
    // // var openQubesAPIResponse = getCall(openQubesAPI.RequestURL,openQubesAPI.RequestHeaders);
    // // 
    // // check(openQubesAPIResponse, {
    // // "Status for open qubes API Response ": r => r.status == 200
    // // });
    // // console.log('api open qubes response',JSON.stringify(openQubesAPIResponse));


    // // get transactions list
    // const transactionListAPI = AfterLoginAPIs[6];
    // transactionListAPI.RequestHeaders.headers.Authorization = `Token ${csvData[__VU].token}`;
    // transactionListAPI.RequestURL = transactionListAPI.RequestURL.replace("{account_id}", csvData[__VU].accountid);
    // var transactionListAPIResponse = getCall(transactionListAPI.RequestURL,transactionListAPI.RequestHeaders);
    // console.log('transactions list response',JSON.stringify(transactionListAPIResponse));
    // check(transactionListAPIResponse, {
    // "Status for transactions list API Response ": r => r.status == 200
    // });

    // // get spend qubes list
    // const spendQubesListAPI = AfterLoginAPIs[7];
    // spendQubesListAPI.RequestHeaders.headers.Authorization = `Token ${csvData[__VU].token}`;
    // spendQubesListAPI.RequestURL = spendQubesListAPI.RequestURL.replace("{account_id}", csvData[__VU].accountid);
    // var spendQubesListAPIResponse = getCall(spendQubesListAPI.RequestURL,spendQubesListAPI.RequestHeaders);
    
    // check(spendQubesListAPIResponse, {
    // "Status for spend qubes API Response ": r => r.status == 200
    // });

    // // get cards list
    // const cardsListAPI = AfterLoginAPIs[8];
    // cardsListAPI.RequestHeaders.headers.Authorization = `Token ${csvData[__VU].token}`;
    // cardsListAPI.RequestURL = cardsListAPI.RequestURL.replace("{account_id}", csvData[__VU].accountid);
    // var cardsListAPIResponse = getCall(cardsListAPI.RequestURL,cardsListAPI.RequestHeaders);
    
    // check(cardsListAPIResponse, {
    // "Status for cards list API Response ": r => r.status == 200
    // });

    // // Commented due to the bill qubes limit reached
    // // create bill qube
    // const createBillQubeAPI = AfterLoginAPIs[11];
    // createBillQubeAPI.RequestHeaders.headers.Authorization = `Token ${csvData[__VU].token}`;
    // createBillQubeAPI.RequestURL = createBillQubeAPI.RequestURL.replace("{account_id}", csvData[__VU].accountid);
    // var createBillQubeAPIResponse = postCall(createBillQubeAPI.RequestURL,createBillQubeAPI.RequestBody,createBillQubeAPI.RequestHeaders);
    // check(createBillQubeAPIResponse, {
    // "Status for create bill qube API Response ": r => r.status == 201
    // });


    // // get bill qubes list
    // const billQubesListAPI = AfterLoginAPIs[12];
    // billQubesListAPI.RequestHeaders.headers.Authorization = `Token ${csvData[__VU].token}`;
    // billQubesListAPI.RequestURL = billQubesListAPI.RequestURL.replace("{account_id}", csvData[__VU].accountid);
    // var billQubesListAPIResponse = getCall(billQubesListAPI.RequestURL,billQubesListAPI.RequestHeaders);
    
    // check(billQubesListAPIResponse, {
    // "Status for bill qubes list API Response ": r => r.status == 200
    // });

    // // get notifcations
    // const notificaitonAPI = AfterLoginAPIs[13];
    // notificaitonAPI.RequestHeaders.headers.Authorization = `Token ${csvData[__VU].token}`;
    // notificaitonAPI.RequestURL = notificaitonAPI.RequestURL.replace("{account_id}", csvData[__VU].accountid);
    // var notificaitonAPIResponse = getCall(notificaitonAPI.RequestURL,notificaitonAPI.RequestHeaders);
    
    // check(notificaitonAPIResponse, {
    // "Status for notifications API Response ": r => r.status == 200
    // });


    // // get icons
    // const iconsAPI = AfterLoginAPIs[14];
    // iconsAPI.RequestHeaders.headers.Authorization = `Token ${csvData[__VU].token}`;
    // iconsAPI.RequestURL = iconsAPI.RequestURL.replace("{account_id}", csvData[__VU].accountid);
    // var iconsAPIResponse = getCall(iconsAPI.RequestURL,iconsAPI.RequestHeaders);
    
    // check(iconsAPIResponse, {
    // "Status for icons API Response ": r => r.status == 200
    // });

    // // get colors
    // const colorsAPI = AfterLoginAPIs[15];
    // colorsAPI.RequestHeaders.headers.Authorization = `Token ${csvData[__VU].token}`;
    // colorsAPI.RequestURL = colorsAPI.RequestURL.replace("{account_id}", csvData[__VU].accountid);
    // var colorsAPIResponse = getCall(colorsAPI.RequestURL,colorsAPI.RequestHeaders);
    
    // check(colorsAPIResponse, {
    // "Status for colorsa API Response ": r => r.status == 200
    // });


    // // get orders
    // const ordersAPI = AfterLoginAPIs[16];
    // ordersAPI.RequestHeaders.headers.Authorization = `Token ${csvData[__VU].token}`;
    // ordersAPI.RequestURL = ordersAPI.RequestURL.replace("{account_id}", csvData[__VU].accountid);
    // var ordersAPIResponse = getCall(ordersAPI.RequestURL,ordersAPI.RequestHeaders);
    
    // check(ordersAPIResponse, {
    // "Status for orders API Response ": r => r.status == 200
    // });


    // // get plaid accounts
    // const plaidAccountsAPI = AfterLoginAPIs[17];
    // plaidAccountsAPI.RequestHeaders.headers.Authorization = `Token ${csvData[__VU].token}`;
    // plaidAccountsAPI.RequestURL = plaidAccountsAPI.RequestURL.replace("{account_id}", csvData[__VU].accountid);
    // var plaidAccountsAPIResponse = getCall(plaidAccountsAPI.RequestURL,plaidAccountsAPI.RequestHeaders);
    
    // check(plaidAccountsAPIResponse, {
    // "Status for plaid accounts API Response ": r => r.status == 200
    // });

    // // get schedules
    // const schedulesAPI = AfterLoginAPIs[18];
    // schedulesAPI.RequestHeaders.headers.Authorization = `Token ${csvData[__VU].token}`;
    // schedulesAPI.RequestURL = schedulesAPI.RequestURL.replace("{account_id}", csvData[__VU].accountid);
    // var schedulesAPIResponse = getCall(schedulesAPI.RequestURL,schedulesAPI.RequestHeaders);
    
    // check(schedulesAPIResponse, {
    // "Status for schedules API Response ": r => r.status == 200
    // });


    // // verify passcode
    // const verifyPasscodeQubeAPI = AfterLoginAPIs[19];
    // verifyPasscodeQubeAPI.RequestHeaders.headers.Authorization = `Token ${csvData[__VU].token}`;
    // verifyPasscodeQubeAPI.RequestURL = verifyPasscodeQubeAPI.RequestURL.replace("{account_id}", csvData[__VU].accountid);
    // var verifyPasscodeQubeAPIResponse = postCall(verifyPasscodeQubeAPI.RequestURL,verifyPasscodeQubeAPI.RequestBody,verifyPasscodeQubeAPI.RequestHeaders);
    // check(verifyPasscodeQubeAPIResponse, {
    // "Status for verify passcode API Response ": r => r.status == 200
    // });


    // // Retrieve Joint Account Invitation for a User
    // const jointInvitationAPI = AfterLoginAPIs[21];
    // jointInvitationAPI.RequestHeaders.headers.Authorization = `Token ${csvData[__VU].token}`;
    // jointInvitationAPI.RequestURL = jointInvitationAPI.RequestURL.replace("{account_id}", csvData[__VU].accountid);
    // var jointInvitationAPIResponse = getCall(jointInvitationAPI.RequestURL,jointInvitationAPI.RequestHeaders);
    
    // check(jointInvitationAPIResponse, {
    // "Status for joint Account Invitation API Response ": r => r.status == 200
    // });


    // // Read Account detail endpoint.
    // const accountDetailAPI = AfterLoginAPIs[22];
    // accountDetailAPI.RequestHeaders.headers.Authorization = `Token ${csvData[__VU].token}`;
    // accountDetailAPI.RequestURL = accountDetailAPI.RequestURL.replace("{account_id}", csvData[__VU].accountid);
    // var accountDetailAPIResponse = getCall(accountDetailAPI.RequestURL,accountDetailAPI.RequestHeaders);
    
    // check(accountDetailAPIResponse, {
    // "Status for joint Account details API Response ": r => r.status == 200
    // });


    // // This endpoint returns a single use URL for an image of a card.
    // const cardImageAPI = AfterLoginAPIs[23];
    // cardImageAPI.RequestHeaders.headers.Authorization = `Token ${csvData[__VU].token}`;
    // cardImageAPI.RequestURL = cardImageAPI.RequestURL.replace("{account_id}", csvData[__VU].accountid);
    // var cardImageAPIResponse = getCall(cardImageAPI.RequestURL,cardImageAPI.RequestHeaders);
    
    // check(cardImageAPIResponse, {
    // "Status for image of a card  API Response ": r => r.status == 200
    // });


    // // An endpoint for creating & deleting devices.
    // const devicesAPI = AfterLoginAPIs[24];
    // devicesAPI.RequestHeaders.headers.Authorization = `Token ${csvData[__VU].token}`;
    // devicesAPI.RequestURL = devicesAPI.RequestURL.replace("{account_id}", csvData[__VU].accountid);
    // var devicesAPIResponse = postCall(devicesAPI.RequestURL,devicesAPI.RequestBody,devicesAPI.RequestHeaders);
    // check(devicesAPIResponse, {
    // "Status for  creating & deleting devices API Response ": r => r.status == 201
    // });


    // // Lists transactions for an account or specific qube
    // const transactionsListAPI = AfterLoginAPIs[25];
    // transactionsListAPI.RequestHeaders.headers.Authorization = `Token ${csvData[__VU].token}`;
    // transactionsListAPI.RequestURL = transactionsListAPI.RequestURL.replace("{account_id}", csvData[__VU].accountid);
    // var transactionsListAPIResponse = getCall(transactionsListAPI.RequestURL,transactionsListAPI.RequestHeaders);
    
    // check(transactionsListAPIResponse, {
    // "Status for transactions for an account  API Response ": r => r.status == 200
    // });
}