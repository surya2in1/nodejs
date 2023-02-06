// Create Simple API in NodeJS

const fs = require("fs");
const http = require('http');
const server = http.createServer((req,res)=>{ 
    
    const fcont = fs.readFileSync('./content/sub-folder/bioData.json','utf-8');
    const fdata = JSON.parse(fcont);
    if(req.url == '/'){
        res.write('Welcome to webpage');
        res.end();
    }else if(req.url == '/userapi'){
        res.writeHead(200,{"content-type":"application/json"});
        res.write(fdata.name);
        res.end();
    }else{
        res.write('Inside else block');
        res.end()
    }    
});
server.listen(8000,"127.0.0.1",()=>{
    console.log('Listening from the port 8000');
});