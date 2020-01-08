const http = require('http');

http.get(process.argv[2],function(data){
	data.setEncoding('utf-8');
	data.on("data",function(data){
		console.log(data);	
	});
});
