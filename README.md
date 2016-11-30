simple-join
=========

Stuidly simple library to help join asynchronous callbacks in Javascript

Installation
------------

	npm install simple-join

Usage
-----
```javascript
	var join = require('simple-join');

	var wait = new join(2,function(){

		console.log("DONE");
	});

	setTimeout(function(){ wait.done(); }, 3000);

	setTimeout(function(){ wait.done(); }, 5000);
```

Also can track if joining functions are successful or had errors

```javascript
	var join = require('simple-join');

	var wait = new join(2,function(status){

		console.log(status); //{"total":2,"errors":1,"success":1,"messages":["my error message"]}
	});

	setTimeout(function(){ wait.success(); }, 3000);

	setTimeout(function(){ wait.error('my error message'); }, 5000);
```

See test.js for full features and examples!