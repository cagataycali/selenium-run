# CLI :thumbsup:
```
npm i -g selenium-run
```

# Usage
```
# Run selenium
selenium -r
# Kill selenium
selenium -k
```

# Programmatical :thumbsup:
```
npm i --save selenium-run
```

# Usage
```
var runner = require('selenium-run');

runner.run();

runner.kill()
  .then(function (value) {console.log(value);})
  .catch(function (error) {console.log(error);})


```



Maintenance & Development [Çağatay Çalı](http://github.com/cagataycali)

Made with :heart:
