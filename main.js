import { applicantToken } from "./http_constraints/web_constraints.js";
import postCall  from "./http_calls/post_call.js";
import getAllApis from './http_scenarios/getAllApis.js';
import { check } from 'k6';
import getCall  from './http_calls/get_call.js'
import {} from './http_constraints/web_constraints'

export let options = {
  vus: 10,
  duration: '1s',
};

export default function () {

}