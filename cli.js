#!/usr/bin/env node
var program = require('commander');
var runner = require('./index');

program
.option('-r, --run', 'Run selenium')
.option('-k, --kill', 'Kill selenium')
.parse(process.argv);

if (program.run) {
  runner.run()
    .then(function (value) {console.log(value);})
    .catch(function (error) {console.log(error);})
} else {
  runner.kill()
    .then(function (value) {console.log(value);})
    .catch(function (error) {console.log(error);})
}
