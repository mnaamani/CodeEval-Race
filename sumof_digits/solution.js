var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){
  return line.split('').reduce(function(a, b){
    if(!b) return a;
    return parseInt(a) + parseInt(b);
  });
}
