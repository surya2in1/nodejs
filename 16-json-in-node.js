const fs = require('fs');

const bioData = {
    name: "Suryakant",
    age: 36,
    city: "Pune"
}

const jsonData = JSON.stringify(bioData);

const fcontent = fs.writeFile('./content/sub-folder/bioData.json', jsonData ,(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("JSON file created successfully");
    }
});

const fcont = fs.readFile('./content/sub-folder/bioData.json','utf-8',(err,result)=>{
    if(err){
        console.log(err)
    }else{
        console.log(result)
    }
})

console.log(fcont);