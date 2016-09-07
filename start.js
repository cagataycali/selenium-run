var seleniumServer = require('selenium-server');
var E = require('3x3c');
var background = require('background-process');
var async = require('async');

E(`java -jar ${seleniumServer.path}`)
  .catch(function (err)  {console.log('Doesn\'t runned.')})
