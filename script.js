function fibonacci(num) {
// your code here
	if(num==0 || num==1){
		return 0;
	}
	let ans=0,a=0,b=1;
	for(let i=1;i<num-1;i++){
		ans = a+b;
		a = b;
		b = ans;
	}
	return b;
}

module.exports = fibonacci;
