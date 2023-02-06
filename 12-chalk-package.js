// How to import package and use it

const chalk = require('chalk');

console.log(chalk.blue('Hello'));
console.log(chalk.red.underline('Hello'));
console.log(chalk.green.underline.inverse('Hello World')); // flip bg and color

/*
If you have installed latest version and you are getting error
then install old version.
Error: const chalk = require("chalk"); 
> npm install chalk@4.1.2
*/