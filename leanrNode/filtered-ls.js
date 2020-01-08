const fs = require('fs');


fs.readdir(process.argv[2],function(err,data){
	data.filter((data)=>{
		return data.endsWith('.'+process.argv[3])
}).forEach((d1) => {console.log(d1);})
});
