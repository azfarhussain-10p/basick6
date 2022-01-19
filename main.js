import { totalNumberofUsers,totalLengthofTest } from './http_constraints/web_constraints.js';
import runOnBoardingScenario from './http_scenarios/onBoardingScenario.js';

export let options = {
  vus: totalNumberofUsers,
  duration: totalLengthofTest + 's',
};

export default function () {
  runOnBoardingScenario(options)
}