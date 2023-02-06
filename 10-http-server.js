const http = require('http');
const server = http.createServer((req,res)=>{   
        res.write('Welcome to webpage');
        res.end();
    
});
server.listen(8000,"127.0.0.1",()=>{
    console.log('Listening from the port 8000');
});