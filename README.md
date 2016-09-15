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