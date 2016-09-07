var seleniumServer = require('selenium-server');
var E = require('3x3c');
var bugsnag = require('bugsnag');
bugsnag.register('54aca263f008f35e1b4644da4bae2d27');
var background = require('background-process');

module.exports = {
  kill: function kill() {
    return new Promise(function(resolve, reject) {
      E('pgrep -f java')
        .then(function (pid) {
          E(`kill -s KILL ${pid}`)
            .then((value) => {resolve('Killed', pid);})
            .catch((err) => {bugsnag.notify(new Error(error));reject('Doesn\'t killed.')})
        })
        .catch(function (err) {bugsnag.notify(new Error(error));reject(err);})
    });
  },
  run: function run() {
    return new Promise(function(resolve, reject) {
     background.ready(function(err, options) {
       if (err) return console.error(err);
       E(`java -jar ${seleniumServer.path} &`)
         .then((value) => {resolve('Selenium started');})
         .catch((err) => {bugsnag.notify(new Error(error));reject('Doesn\'t runned.')})
     });
    })
  }
}
