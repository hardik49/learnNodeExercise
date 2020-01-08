const fs = require('fs');
const path = require('path');


module.exports = function (dir, extentions, callback){
	fs.readdir (dir, function (err, con) {
		if (err) {
			return callback(err);
		} 
			con = con.filter((f1) => {
				return path.extname(f1) === '.' + extentions;			
			})	

	callback(null, con);
	
	} )
}
	

