import { applicantToken } from "../http_constraints/web_constraints.js";
import postCall  from "../http_calls/post_call.js";
import getApisMetaData from './getAllApis.js';
import { check } from 'k6';
import getCall  from '../http_calls/get_call.js'


export let options = {
  vus: 10,
  duration: '60s',
};

export default function () {
    let usersApiJson = getApisMetaData("CreateUserAPIs");

    // first name and last name
    const firstnameLastnameAPI = usersApiJson[0];
    var firstnameLastnameAPIResponse = postCall(firstnameLastnameAPI.RequestURL,firstnameLastnameAPI.RequestBody);

    check(firstnameLastnameAPIResponse, {
    "Status for First Name API Response ": r => r.status == 200
    });
    
    let Jsonresponse = JSON.parse(firstnameLastnameAPIResponse.body);
    let userID = Jsonresponse[0].id;

    // // Create phone number
    const createPHoneNumberAPI = usersApiJson[1];
    createPHoneNumberAPI.RequestBody.id = userID;
    var createPHoneNumberAPIResponse = postCall(createPHoneNumberAPI.RequestURL,createPHoneNumberAPI.RequestBody);
    check(createPHoneNumberAPIResponse, {
        "Status for Create Phone number Response ": r => r.status == 201
    });
    console.log('create phonennumber api response',JSON.stringify(createPHoneNumberAPIResponse));
    var verificationCode = JSON.parse(createPHoneNumberAPIResponse.body).verification_code;
    var phoneNumber = JSON.parse(createPHoneNumberAPIResponse.body).phone_number;

    // // verify phone number
    const verifyPHoneNumberAPI = usersApiJson[2];
    verifyPHoneNumberAPI.RequestBody.id = userID;
    verifyPHoneNumberAPI.RequestBody.verification_code = verificationCode;
    verifyPHoneNumberAPI.RequestBody.phone_number = phoneNumber;
    var createPHoneNumberAPIResponse = postCall(verifyPHoneNumberAPI.RequestURL,verifyPHoneNumberAPI.RequestBody);
    check(createPHoneNumberAPIResponse, {
        "Status for verify Phone number Response ": r => r.status == 200
    });


    // // onboarding plan creation
    const planCreationAPI = usersApiJson[3];
    planCreationAPI.RequestBody.id = userID
    var planCreationAPIResponse = postCall(planCreationAPI.RequestURL,planCreationAPI.RequestBody);

    check(planCreationAPIResponse, {
    "Status for plan creation API Response ": r => r.status == 200
    });



    // // onboarding password creation
    const passwordCreationAPI = usersApiJson[4];
    passwordCreationAPI.RequestBody.id = userID;
    var passwordCreationAPIResponse = postCall(passwordCreationAPI.RequestURL,passwordCreationAPI.RequestBody);
    console.log('PASWORD REP', JSON.stringify(passwordCreationAPIResponse));
    check(passwordCreationAPIResponse, {
    "Status for password API Response ": r => r.status == 200
    }); 

    // //onboarding debit card selection
    const cardSelectionAPI = usersApiJson[5];
    cardSelectionAPI.RequestBody.id = userID;
    var cardSelectionAPIResponse = postCall(cardSelectionAPI.RequestURL,cardSelectionAPI.RequestBody);

    check(cardSelectionAPIResponse, {
    "Status for card selection API Response ": r => r.status == 200
    });


    // // onboarding mailing address
    const mailingAddressAPI = usersApiJson[6];
    mailingAddressAPI.RequestBody.id = userID;
    var mailingAddressAPRresponse = postCall(mailingAddressAPI.RequestURL,mailingAddressAPI.RequestBody);

    check(mailingAddressAPRresponse, {
    "Status for mailing address API Response ": r => r.status == 200
    });

    //onboarding birth date ssn
    const birthDateSSNAPI = usersApiJson[7];
    birthDateSSNAPI.RequestBody.id = userID;
    var birthDateSSNAPIResponse = postCall(birthDateSSNAPI.RequestURL,birthDateSSNAPI.RequestBody);

    check(birthDateSSNAPIResponse, {
    "Status for birth date ssn API Response ": r => r.status == 200
    });

    // onboarding summary
    const summaryApi = usersApiJson[8];
    summaryApi.RequestBody.id = userID;
    var summaryApiResponse = postCall(summaryApi.RequestURL,summaryApi.RequestBody);
    console.log('SUMARY REP', JSON.stringify(summaryApiResponse));
    check(summaryApiResponse, {
    "Status for summary API Response ": r => r.status == 200
    });
}