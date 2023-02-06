// GLOBALS - NO WINDOW

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - it gives info about current module(file)
// process - It gives info about env where the program is being executed.

console.log(__dirname);
console.log(__filename);
console.log(module);
console.log(process);

setInterval(function () {
  console.log("Hello World");
}, 1000);
