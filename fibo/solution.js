var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){
  // Put your solution code here
  // Each line represents 1 test case provided by CodeEval
  var N = parseInt(line);
  return fibo(N);
}

function fibo(n){
  if(n == 1) return 1;
  if(n == 2) return 1;
  return fibo(n-1) + fibo(n-2);
}
