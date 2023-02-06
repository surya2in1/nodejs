// This is synchronous 

const fs = require("fs");

// Create file and add content to it
fs.writeFileSync("./content/sub-folder/surya.txt", "Welcome to NodeJS");

//It will overwrite if file is already present.
fs.writeFileSync("./content/sub-folder/surya.txt", "Welcome to new world of NodeJS");

// Append file content 
fs.appendFileSync("./content/sub-folder/surya.txt",". I am loving nodejs.");

// Read file content
let buf_data = fs.readFileSync("./content/sub-folder/surya.txt");
console.log(buf_data); // 
console.log(buf_data.toString());

// Read file content using utf-8
let fileContent = fs.readFileSync("./content/sub-folder/surya.txt","utf-8");
console.log(fileContent);

// rename file 
fs.renameSync("./content/sub-folder/surya.txt","./content/sub-folder/suryakant.txt");

// delete file
fs.unlinkSync("./content/sub-folder/suryakant.txt");

// create new folder
fs.mkdirSync("./content/sub-folder/demo");

// Delete folder
fs.rmdirSync("./content/sub-folder/demo");


/* Note you can also do it  */
const {readFileSync, writeFileSync} = require('fs'); // extracting read and write method

const first = readFileSync("./content/first.txt","utf-8");
const second = readFileSync("./content/second.txt","utf-8");
console.log(first);
console.log(second);

const fileCont = writeFileSync("./content/result-sync.txt",`Cool loving node js. ${first} and ${second}`, {flag:'a'})