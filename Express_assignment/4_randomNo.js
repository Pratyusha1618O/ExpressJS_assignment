// Build a Server that Generates Random Number Using Express
//  ‘/random’ → send random number in response {random:10}

const express = require('express');

const app = express();

const PORT = 2023;
const HOSTNAME = 'localhost';

app.get('/', (req, res)=>{
    res.send("Its a server which generates random number. To generate random number go to '/random' ");
});


app.get('/random', (req, res)=>{

    let upperVal = 100;
    let lowerVal = 0;
    let x = ((upper, lower) => {
        return Math.floor(Math.random() * (upper - lower) + 1);
    })(upperVal, lowerVal);

    res.send(`{Random: ${x}}`);
});

app.listen(PORT, ()=>{
    console.log(`Server running at ${HOSTNAME}:${PORT}`);
})