const path = require("path");
const pathObj = require("path");

// It returns path separator character
console.log(pathObj.sep);

// join method join the path
const filePath = pathObj.join("/content/", "sub-folder", "test.txt");
console.log(filePath); // content/sub-folder/test.txt

// get file name
const fileName = pathObj.basename(filePath);
console.log(fileName); // test.txt

// get file extenstion
const ext = pathObj.extname(filePath);
console.log(ext); // .txt

// Get absolute path
const absolute = pathObj.resolve(
  __dirname,
  "content",
  "sub-folder",
  "test.txt"
);
console.log(absolute); // C:\Users\HP\Desktop\nodeTutorial\content\sub-folder\test.txt

// Get directory name
const dirName = pathObj.dirname(absolute);
console.log(dirName); // C:\Users\HP\Desktop\nodeTutorial\content\sub-folder\
