#!/usr/bin/env node
var program = require('commander');
var runner = require('./index');
var async = require('async');

program
.option('-r, --run', 'Run selenium')
.option('-k, --kill', 'Kill selenium')
.option('-b, --background', 'Background selenium')
.parse(process.argv);

if (program.background) {
  runner.background()
    .then((value) => {console.log(value);})
    .catch((err) => {console.log(err);})
} else if (program.run) {
  console.log('Selenium runned');
  runner.run();
} else if (program.kill) {
  runner.kill()
    .then(function (value) {console.log(value);})
    .catch(function (error) {console.log(error);})
} else {
  console.log('Nothing runned. selenium -h');
}
