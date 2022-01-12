/**
 * @class       : index
 * @author      : bidaya0 (bidaya0@00-1E-10-1F-00-00)
 * @created     : 星期二 1月 04, 2022 01:35:11 CST
 * @description : index
 */


const core = require('@actions/core');
const github = require('@actions/github');
const { exec,execSync } = require('child_process');
const { existsSync,writeFileSync } = require('fs');
const initbash = `sudo curl -L https://github.com/joereynolds/sql-lint/releases/latest/download/sql-lint-linux -o  /usr/local/bin/sql-lint &&
sudo chmod +x /usr/local/bin/sql-lint &&
sudo ln -s /usr/local/bin/sql-lint /usr/bin/sql-lint`

function initconfig(host,user,password,driver='mysql',port=3306,ignore_errors=[]){
		config_data = {'host':host,'user':user,'password':password,'driver':driver,'port':port,'ignore_errors':ignore_errors}
		writeFileSync('/tmp/config.json',JSON.stringify(config_data),{flag: 'w',overwrite:true})
}

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
	const use_database = core.getBooleanInput('use_database', { required: false})
	if (use_database == true){
		const host = core.getInput('host', { required: false})
		const user = core.getInput('user',{required: false})
		const password = core.getInput('password',{required:false})
		const driver = core.getInput('driver',{required:false})
		const port = core.getInput('port',{required:false})
		const ignore_errors = core.getInput('ignore_errors',{required:false}).split(',').filter((x)=>(x!=''))
		initconfig(host,user,password,driver,port,ignore_errors)
	}
	const runbash = `sql-lint ${path}`
	if (use_database === true){
		const runbash = `sql-lint ${path} --config=/tmp/config.json`
	}
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
