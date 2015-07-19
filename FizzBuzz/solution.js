var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){
  var seq = [];
  var params = line.split(' ');
  var X = params[0];//fizz
  var Y = params[1];//buzz
  var N = params[2];
  for(var i = 1; i <= N; i++){
    if(i % X === 0 && i % Y === 0) {
      seq.push('FB');
    } else if(i%X===0){
      seq.push('F');
    } else if(i%Y===0){
      seq.push('B');
    } else {
      seq.push(i);
    }
  }
  return seq.join(' ');
}
