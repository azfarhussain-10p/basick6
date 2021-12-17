import { applicantToken } from "./http_constraints/web_constraints.js";
import postCall  from "./http_calls/post_call.js";
import getAllApis from './http_scenarios/getAllApis.js';
import { check } from 'k6';
import getCall  from './http_calls/get_call.js'


export let options = {
  vus: 10,
  duration: '1s',
};

export default function () {
		// let allApisJson = getAllApis("users")
    // for (let index = 0; index < allApisJson.length; index++) {
    //   const element = allApisJson[index];
    //   let headers = element.RequestHeaders;
    //   headers.headers.Authorization = applicantToken;

    //   if(element.RequestType == "POST")
    //     var response = postCall(element.RequestURL,element.RequestBody,headers);
    //   else  
    //     var response = getCall(element.RequestURL,headers);

    //   console.log('API RESPONSE => ', JSON.stringify(response))

    //   check(response, {
    //     "Status for API Response ": r => r.status == 200
    //   })

    // }
}