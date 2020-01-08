const http = require('http');
const bl = require('bl');

const res = [];
let count = 0;
function print() {
	for (let  i = 0; i < 3; i++) {
		console.log(res[i]);
	}
}


function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.log(err)
      }
      res[index] = data.toString()
      count++

      if (count === 3) {
        print()
      }
    }))
  })
}

for (let i = 0; i < 3; i++) {
  httpGet(i)
}
