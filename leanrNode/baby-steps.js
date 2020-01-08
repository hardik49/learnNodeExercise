let temp = 0 ;
let val1 = Number(process.argv);

for (let i = 2; i < Number(process.argv.length); i++) {
	temp = temp+Number(process.argv[i]);
}

console.log(temp);
