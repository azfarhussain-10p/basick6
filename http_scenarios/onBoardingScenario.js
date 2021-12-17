import { applicantToken } from "../http_constraints/web_constraints.js";
import postCall  from "../http_calls/post_call.js";
import getApisMetaData from '../http_scenarios/getAllApis.js';
import { check } from 'k6';
import getCall  from '../http_calls/get_call.js'


export let options = {
  vus: 10,
  duration: '1s',
};

export default function () {
    let allApisJson = getApisMetaData("onboarding");

    // first name and last name
    const element = allApisJson[0];
    console.log('request body',JSON.stringify(element.RequestBody));
    var response = postCall(element.RequestURL,element.RequestBody);

    check(response, {
    "Status for API Response ": r => r.status == 200
    });

    // let Jsonresponse = JSON.parse(response.body);
    // let userID = Jsonresponse[0].id;
    // console.log('user id',userID);



    // const element = allApisJson[1];
    // var response = postCall(element.RequestURL,element.RequestBody);
    // check(response, {
    //     "Status for Create Phone number Response ": r => r.status == 200
    // });

    // const element = allApisJson[2];
    // var response = postCall(element.RequestURL,element.RequestBody);
    // check(response, {
    //     "Status for Create Phone number verification Response ": r => r.status == 200
    // });

}