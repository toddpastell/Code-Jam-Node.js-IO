# Node Code Jam IO
A simple Node.js module to handle read/write operations when solving Google Code Jam problems

## How to Use
Run your node script with your input file and outpul file as arguments.

```node [script.js] [input.txt] [output.txt]```

Here is a basic template for your script file.

```
const io =  require('../lib/io');

io.solve((n, input) => {
  /* your code to solve the problem */
  let answer = your_solver(input);
  return 'Case ${n}: ${answer}';
});
```

## io
### .solve( work )
**work**

Type: Function( Number line, String input )

Return: String

A function that provides the line number and input data for each line of the input file. Return the string that will be written to each line of the output file.
