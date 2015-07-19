var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

console.log(fs.readFileSync(filename).toString().split('\n').reduce(function(a, b){
 if(!b) return a;
 return parseInt(a) + parseInt(b);
}));
