// BASIC EXPRESS SERVER 

const express = require("express") 
const app = express(); 

const PORT = 4010;
const HOSTNAME = 'localhost';

app.get('/', (req, res)=>{
    res.send('I am Home Page');
});

app.get('/about', (req, res)=>{
    res.send('I am about page');
});

app.get('/contact', (req, res)=>{
    res.send(`support@pwskills.com`);
});

//1ta port theke listen korate chai6i
app.listen(PORT, ()=>{
    console.log(`Server running at ${HOSTNAME}:${PORT}`);
});





