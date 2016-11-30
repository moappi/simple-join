simple-join
=========

Stuidly simple library to help join asynchronous callbacks in Javascript

## Install
```
$ npm install simple-join
```

## Usage

##### Simple joining

```js
	var join = require('simple-join');

	var wait = new join(2,function(){

		console.log("DONE");
	});

	setTimeout(function(){ wait.done(); }, 3000);

	setTimeout(function(){ wait.done(); }, 5000);
```

##### Simple joining, with error & success information

```js
	var join = require('simple-join');

	var wait = new join(2,function(status){

		console.log(status); //{"total":2,"errors":1,"success":1,"messages":["my error message"]}
	});

	setTimeout(function(){ wait.success(); }, 3000);

	setTimeout(function(){ wait.error('my error message'); }, 5000);
```

## Methods

### join(num,callback)

Parameters: 

- `num` (number) - number of waits to be comlpeted before running callback
- `callback` (function) - callback function to be run when ready to join. Callback will be passed the status object (same as join.status method)

Returns:

- (object) new instance of the object

Example:

```js
	var wait = new join(3,function(status){
		//Run when we're done waiting!
	});
```

#### join.done



