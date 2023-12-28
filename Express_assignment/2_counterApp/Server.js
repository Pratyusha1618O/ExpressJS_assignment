// Create a Backend For Counter Web App with Api Endpoint for Managing Counter Using Express
// ‘/’ → send counter data as {counter:counter}
// `/increment` → increment counter by 1 and send in response latest data as {counter:counter}
// `/decrement` → decrement counter by 1 and send in response latest data as {counter:counter}


let decrement = document.getElementById("decrement");
let increment = document.getElementById("increment");
let number = document.getElementById("number");
let reset = document.getElementById("reset");


//________________________________________________

//creating express server

const express = require("express");

const app = express();

const PORT = 5000;
const HOSTNAME = 'localhost';

app.get('/',(req, res)=>{
    res.send(`Counter: ${number}`)
})

app.get('/increment', (req,res)=>{
    increment.addEventListener("click", ()=>{
        const value = Number(number.innerText);
        number.innerText = value+1;
    })
    res.send(`Counter : ${number.innerText}`)
})

app.get('/decrement', (req,res)=>{
    decrement.addEventListener("click", ()=>{
        const value = Number(number.innerText);
        number.innerText = value-1;
    })
    res.send(`Counter : ${number.innerText}`)
})

app.get('/reset', (req,res)=>{
    reset.addEventListener("click", ()=>{
        number.innerText=0;
    });
})

app.listen(PORT, ()=>{
    console.log(`Server running on ${LOCALHOST}:${PORT}`);
})


