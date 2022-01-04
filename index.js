/**
 * @class       : index
 * @author      : bidaya0 (bidaya0@00-1E-10-1F-00-00)
 * @created     : 星期二 1月 04, 2022 01:35:11 CST
 * @description : index
 */


const core = require('@actions/core');
const github = require('@actions/github');
const { exec,execSync } = require('child_process');
const { existsSync } = require('fs');
const initbash = `sudo curl -L https://github.com/joereynolds/sql-lint/releases/latest/download/sql-lint-linux -o  /usr/local/bin/sql-lint &&
sudo chmod +x /usr/local/bin/sql-lint &&
sudo ln -s /usr/local/bin/sql-lint /usr/bin/sql-lint`
				
try {
  const path = core.getInput('path');
	if (existsSync('/usr/local/bin/sql-lint')) {
    console.log('Found ');
	}
	else{
		execSync(initbash, (err, stdout, stderr) => {
				if (err) {
					core.setFailed(err.message);
				}
			console.log(`stdout: ${stdout}`);
			if (stderr){
				core.setFailed(`stderr: ${stderr}`);
			}
		});
	}
	const runbash = `sql-lint ${path}`
	exec(runbash, (err, stdout, stderr) => {
		if (err) {
			core.setFailed(err.message);
  }

		console.log(`stdout: ${stdout}`);
		if (stderr){
			core.setFailed(`stderr: ${stderr}`);
		}
	});
  // Get the JSON webhook payload for the event that triggered the workflow
} catch (error) {
  core.setFailed(error.message);
}
//function() {
//				exec(initbash, (err, stdout, stderr) => {
//					if (err) {
//						// node couldn't execute the command
//						return;
//					}
//
//					// the *entire* stdout and stderr (buffered)
//					console.log(`stdout: ${stdout}`);
//					console.log(`stderr: ${stderr}`);
//				})
//}
