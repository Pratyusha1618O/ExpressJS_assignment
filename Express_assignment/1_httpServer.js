// Build a Server Using Http Module NodeJS with api endpoints for Getting Products Data
//  ‘/’ → send msg as “Welcome to Men & Women Dummy Data
//  ‘/men’ → send 10 products data of men
//  ‘/women’→send 10 products data of women
//  ‘/other’ → send response as page not found

const http = require("http");

const PORT = 2020;
const HOSTNAME = 'localhost';

const server = http.createServer((req,res)=>{
    
    if(req.url == '/'){
        res.statusCode = 200;
        res.setHeader("content-type", 'text/plain');
        res.end("welcome to Men & Women Dummy Data");
    }
    else if(req.url == '/men'){
        res.statusCode = 200;
        res.setHeader('content-type', 'application/json');
        res.end(JSON.stringify([
            {
                "id": 1,
                "name": "Men's T-Shirt",
                "Brand": "abc",
                "price": 500.00,
                "color": "blue",
                "size": "M",
                "Category": "Clothing",
                "discount": "20 %",
                "code": "xyz",
                "type": "cotton"
            }
        ]));
    }
    else if(req.url == '/women'){
        res.statusCode = 200;
        res.setHeader('content-type', 'application/json');
        res.end(JSON.stringify([
            {
                "id": 1,
                "name": "women's T-Shirt",
                "Brand": "abc",
                "price": 500.00,
                "color": "blue",
                "size": "M",
                "Category": "Clothing",
                "discount": "20 %",
                "code": "xyz",
                "type": "cotton"
            }
        ]));
    }
    else{
        res.statusCode = 500;
        res.setHeader("content-type", 'application/json');
        res.end("Page not found");
    }
    
});

server.listen(PORT, ()=>{
    console.log(`Server running at ${HOSTNAME}:${PORT}`);
});