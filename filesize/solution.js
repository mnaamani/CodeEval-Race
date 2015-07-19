var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

console.log(fs.readFileSync(filename).toString().length);
