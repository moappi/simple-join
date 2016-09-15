function join(num,callback) {
    this.joins = num;
    this.callback = callback;
}

join.prototype.done = function() {

	//Decrement the join counter
    this.joins--;
    
	//If we don't anything else to join then callback
    if(!this.joins) this.callback();
};