const fs = require('fs');


fs.readFile(process.argv[2],function(err,content) {
	cnt =  content.toString().split('\n').length - 1;
console.log(cnt);
});

//console.log(callBk);
