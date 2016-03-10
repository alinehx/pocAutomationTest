'use strict';

var childProcess = require('child_process');


function runScript(scriptPath, callback) {
  var invoked = false,
    process = childProcess.fork(scriptPath, [], {
      stdio: 'pipe'
    });

    //listen for errors as they may prevent the exit event from firing
    process.on('error', function (err) {
      if(invoked) return;
      invoked = true;
      callback(err);
    });
    // execute the callback once the process has finished running
    process.on('exit', function (code) {
      if (invoked) return;
      invoked = true;
      var err = code === 0 ? null : new Error('exit code ' + code);
      callback(err);
    });

    process.on('data', function(data){
      console.log(data);
    });

    process.on('message', function(value) {

    });
}

runScript('../pocTestAutomation/app.js', function (err, res) {
  console.log(res);
  if(err) throw err;
  console.log('finished to run app.js');
});