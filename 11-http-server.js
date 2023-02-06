const http = require('http');
const server = http.createServer((req,res)=>{  
    if(req.url == '/') {
        res.write('Welcome to webpage');
        res.end();
    }else if(req.url == '/about'){
        res.write('Welcome to About Us');
        res.end();
    } else if(req.url == '/contact'){
        res.write('Welcome to Contact Us ');
        res.end('Stay connected with Us');
    }
    else{
        res.writeHead(400,{'content-Type':'text/html'});
        res.write('Page Not Found');
        res.end();
    }
    
});
server.listen(8000,"127.0.0.1",()=>{
    console.log('Listening from the port 8000');
});