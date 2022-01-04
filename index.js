/**
 * @class       : index
 * @author      : bidaya0 (bidaya0@00-1E-10-1F-00-00)
 * @created     : 星期二 1月 04, 2022 01:35:11 CST
 * @description : index
 */

export default class index {
}

const core = require('@actions/core');
const github = require('@actions/github');
const github =
try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('path');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
