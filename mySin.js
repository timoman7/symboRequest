Math.f = [];
Math.fact = function(n){
	if(n == 0 || n == 1){
		return 1;
    }
	if(Math.f[n] > 0){
		return Math.f[n];
    }
	return Math.f[n] = Math.fact(n-1) * n;
};
function mySin(x, accuracy){
	let curOp = 1;
	let rv = 0;
	for(let a = 1; a <= (accuracy * 2) + 1; a += 2){
		rv += curOp * (Math.pow(x, a)/Math.fact(a));
		console.log(a)
		curOp *= -1;
	}
	return rv;
}

function myCos(x, accuracy){
	let curOp = 1;
	let rv = 0;
	for(let a = 0; a <= (accuracy * 2) + 1; a += 2){
		rv += curOp * (Math.pow(x, a)/Math.fact(a));
		console.log(a)
		curOp *= -1;
	}
	return rv;
}
/*
Object.defineProperties(Number.prototype, {
	term: {
        get: function(){
        	return this.stored_term;
        },
        set: function(value){
        	this.stored_term = value;
		},
		configurable: true
	},
	stored_term: {
		value: "degree",
		enumerable: false,
		configurable: true,
		writable: true
    }
});
Object.defineProperties(Number, {
	term: {
        get: function(){
        	return this.stored_term;
        },
        set: function(value){
        	this.stored_term = value;
		},
		configurable: true
	},
	stored_term: {
		value: "degree",
		enumerable: false,
		configurable: true,
		writable: true
    }
});
*/
