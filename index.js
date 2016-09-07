var seleniumServer = require('selenium-server');
var E = require('3x3c');
var background = require('background-process');
var async = require('async');

module.exports = {
  kill: function kill() {
    return new Promise(function(resolve, reject) {
      E('pgrep -f java')
        .then(function (pid) {
          E(`kill -s KILL ${pid}`)
            .then((value) => {resolve('Killed', pid);})
            .catch((err) => {reject('Doesn\'t killed.')})
        })
        .catch(function (err) {reject(err);})
    });
  },
  background: function run() {
    var options = { foo: 'bar' };
    background.start('start.js', options);
  },
  run: function run() {
    return new Promise(function(resolve, reject) {
      E(`java -jar ${seleniumServer.path}`)
        .then((value) => {resolve('Runned')})
        .catch((err) =>  {reject('Doesn\'t runned.')})
    });
  }
}
