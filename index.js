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
		if (host==''){
		config_data = {'host':host,'user':user,'password':password,'driver':driver,'port':int(port),'ignore-errors':ignore_errors}
		}else{
		config_data = {'driver':driver,'port':int(port),'ignore-errors':ignore_errors}
		}
		console.log(config_data)
		writeFileSync('/tmp/config.json',JSON.stringify(config_data),{flag: 'w',overwrite:true})
}
function get_runbash(path,use_database){
	if (use_database == true){
		return `sql-lint ${path} --config=/tmp/config.json`
	}
	return `sql-lint ${path}`
}
function is_use_database(host){
	if (host == ''){
		return false
	}
	return true
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
	const host = core.getInput('host', { required: false})
	const user = core.getInput('user',{required: false})
	const password = core.getInput('password',{required:false})
	const driver = core.getInput('driver',{required:false})
	const port = core.getInput('port',{required:false})
	const ignore_errors = core.getInput('ignore_errors',{required:false}).split(',').filter((x)=>(x!=''))
	initconfig(host,user,password,driver,port,ignore_errors)
	const runbash = get_runbash(path,host=='')
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
