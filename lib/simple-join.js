function join(num,callback) {
    this.joins = num;
    this.callback = callback;

	//Make sure we signal when we've made the callback 
	// prohibits us from calling it more than once
	this.finished = false;

	//Status
	this.status = {
		"total":num,	//Total number of joins
		"success":0,	//Total number of "successful" joins

		"errors":0,		//Total number of joins with "errors"
		"messages":[]	//Error messages from joins
	};
}

//Join and signal that we're done
// (optional) num : integer (signals that we've completed multiple joins)
// returns number of joins left to complete
join.prototype.done = function(num) {

	//Decrement the join counter
    if(num) this.joins -= num;
	else this.joins--;
    
	//If we don't anything else to join then callback
    if(this.joins <= 0 && this.callback !== undefined && !this.finished) {
		this.finished = true;
		this.callback(this.status);
	}
	
	//Return how many joins we have left
	return(this.joins);
};

//Join and signal that we've encountered a successful run
// returns number of joins left to complete
join.prototype.success = function(num) {
	if(num) this.status.success += num;
	else this.status.success++;

	//Join and return
	return( this.done(num) );
};

// Join and signal that we've encountered an error
// (optional) val : integer | string (integer: passed to done to signal multiple joins, string: records error message to status.messages)
// returns number of joins left to complete
join.prototype.error = function(val) {
	
	var num;

	switch(typeof(val)) {

		//Number 
		case "number":
			this.status.errors += val;
			
			//Save this value for done
			num = val;
		break;

		case "string":
			this.status.errors++;
			this.status.messages.push(val);
		break;

		default:
			this.status.errors++;
		break;
	}
	
	//Join and return
	return( this.done(num) );
};

//Returns the status of the joins
//  returns object 
//   { total : total number of joins specified
//     success : total number of succesfully completed joins (if this.success was used instead of this.done)
//     errors : total number of errors encountered in joins (if this.error was used instead of this.done)
join.prototype.status = function() {
	
	//Return the  error messages
	return(this.status);
};