// This is asynchronous

const fs = require("fs");

// Create new file and add content to id
fs.writeFile("./content/sub-folder/surya.txt","Welcome to NodeJS", (err)=>{
    console.log("File is created");
});

// append new content into the file
fs.appendFile("./content/sub-folder/surya.txt"," I am loving NodeJS", (err) => {
    console.log("New file content added");
});

// Read file content
const buf_data = fs.readFile("./content/sub-folder/surya.txt",(err, data) => {
    console.log(data.toString()); // data has buffer data
});

// Read file content
const fileContent = fs.readFile("./content/sub-folder/surya.txt","utf-8",(err,data)=>{
    console.log(data);
});

// rename file
fs.rename("./content/sub-folder/surya.txt","./content/sub-folder/suryakant.txt",(err) => {
    console.log("File renamed");
})

// delete file (unlink)
fs.unlink("./content/sub-folder/suryakant.txt",(err)=>{
    console.log("File get Deleted");
});

// create Folder
fs.mkdir('./content/sub-folder/demo',(err)=>{
    console.log("Folder created");
});

// delete folder
fs.rmdir("./content/sub-folder/demo",(err)=>{
    console.log("Folder Deleted");
});


/* Another Example */

const {readFile, writeFile, write} = require('fs');

readFile('./content/first.txt','utf-8',(err,result) => {
    if(err){
        console.log(err);
    }
    console.log(result);
    const first = result;

    readFile('./content/second.txt','utf-8',(err,data)=>{
        if(err){
            console.log(err);
        }
        const second = data;
        writeFile('./content/result-async.txt',`I am loving NodeJS. ${first} and ${second}`,(err,data)=>{
            if(err){
                console.log(err);
            }
        });
        const fileCont = data;
        console.log(fileCont)
    })
    
})