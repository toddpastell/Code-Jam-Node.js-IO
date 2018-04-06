const fs = require('fs');
const readline = require('readline');

exports.solve = (work) => {
  if (process.argv.length < 3) return console.error('Error: input file not specified');
  if (process.argv.length < 4) return console.error('Error: output file not specified');
  let n = -1;
  let sets = 0;
  const ws = fs.createWriteStream(process.argv[3]);
  readline.createInterface({
    input: fs.createReadStream(process.argv[2])
  }).on('line', (input) => {
    n++;
    if (n > 0) ws.write(work(n, input) + '\n');
    else sets = input;
  }).on('close', () => {
    ws.end();
    console.log(n + ' sets solved of ' + sets + '.');
  });
};
