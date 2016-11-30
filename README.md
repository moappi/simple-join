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

- `num` (number) - number of joins to be comlpeted before running callback
- `callback` (function) - callback function to be run when all joins are completed. Passed the status object (see join.status method)

Returns:

- (object) new instance of the object

Example:

```js
	var wait = new join(3,function(status){
		//Run when we've joined all 3 
	});
```

#### join.done(num)

Signals that a join(s) is completed

Parameters: 

- `num` (number, optional) - number of joins to be crossed off the list, default is 1

Returns:

- (number) number of joins that we're still waiting for

Example:

```js
	wait.done();
	wait.done(2);
```

#### join.success(num)

Signals that a join(s) is completed, and was 'successful'

Parameters: 

- `num` (number, optional) - number of joins to be crossed off the list, default is 1

Returns:

- (number) number of joins that we're still waiting for

Example:

```js
	wait.success();
	wait.success(2);
```

#### join.error(val)

Signals that a join(s) is completed, but with an 'error'.

Parameters: 

- `val` (number, optional) - number of joins to be crossed off the list, default is 1

OR

- `val` (string, optional) - error message to be recorded

Returns:

- (number) number of joins that we're still waiting for

Example:

```js
	wait.error();
	wait.error(2);
	wait.error('My error message');
```

#### join.status()

Get the join status object (same as object passed to the callback)

Parameters: None

Returns:

- (object) with the following properties 
	total (number) : total number of joins when join was created
	success (number) : number of joins completed that were successful (via join.success)
	errors (number) : number of joins that had errors (via join.error)
	messages (array) : array of errors messages (via join.error)

Example:

```js
	wait.status();
```

```js
	{
		"total":2,
		"success":1,
		"errors":1,
		"messages":["My error message"]
	}
```

