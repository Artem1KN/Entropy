let fs = require('fs');
let arg = process.argv;
let inText;
let entropy=0;
let n = 1, i = 0, c = 0;
let testString = '';
inText = fs.readFileSync('input.txt');
inText = inText.toString();
let alph=new Array();
for (i=0;i<inText.length;i++){
	alph[inText.charAt(i)]=0
}
for (i=0;i<inText.length;i++){
	if (alph[inText.charAt(i)]==0){
		c+=1;
	}
	alph[inText.charAt(i)]++;
}
for (i in alph){
	alph[i]/=inText.length;
}
for (i in alph){
	entropy-=alph[i]*(Math.log(alph[i])/Math.log(c));
}
if (c==1){
	entropy=0;
}
console.log(entropy)