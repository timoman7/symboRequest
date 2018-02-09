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
		console.log(curOp)
		curOp *= -1;
	}
	return rv;
}
