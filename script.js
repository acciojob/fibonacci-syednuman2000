function fibonacci(num) {
// your code here
	if(num==0){
		return 0;
	}
	let ans=0,a=1,b=0;
	for(let i=0;i<num;i++){
		ans = a+b;
		a = b;
		b = ans;
	}
	return b;
}

module.exports = fibonacci;
