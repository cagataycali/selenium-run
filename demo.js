var runner = require('./index');

runner.run()
  .then(function (value) {console.log(value);})
  .catch(function (error) {console.log(error);})

//
// runner.kill()
//   .then(function (value) {console.log(value);})
//   .catch(function (error) {console.log(error);})
