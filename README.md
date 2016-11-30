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
- `callback` (function) - callback function to be run when ready to join. Callback will be passed the a single parameter, a status object (same as join.status method)

Returns:

- (object) new instance of the object

Example:

```js
	var wait = new join(3,function(status){
		//Run when we're done waiting!
	});
```

#### join.done(num)

Signals that we're done waiting.

Parameters: 

- `num` (number, optional) - number of waits to be crossed off the list, if omitted this is set to 1

Returns:

- (number) number of waits that we are still waiting for

Example:

```js
	wait.done();
	wait.done(2);
```

#### join.success(num)

Signals that we're done waiting, but with a 'success'.

Parameters: 

- `num` (number, optional) - number of waits to be crossed off the list, if omitted this is set to 1

Returns:

- (number) number of waits that we are still waiting for

Example:

```js
	wait.success();
	wait.success(2);
```

#### join.error(val)

Signals that we're done waiting, but with an 'error'.

Parameters: 

- `val` (number, optional) - number of waits to be crossed off the list, if omitted this is set to 1

OR

- `val` (string, optional) - error message to be recorded and displayed using join.status

Returns:

- (number) number of waits that we are still waiting for

Example:

```js
	wait.error();
	wait.error(2);
	wait.error('My error message');
```

#### join.status()

Get the status object which shows details on the join.

Parameters: None

Returns:

- (object) with the following properties 
	total (number) : total number of waits that we're waiting for
	success (number) : total number of waits completed that were successful (by join.success)
	errors (number) : total number of waits that had errors (by join.error)
	messages (array) : array of errors messages (by join.error)

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

