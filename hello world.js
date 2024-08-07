//Basic syntax to start express .js is here  and this code will print hello world 

//const express = require('express');
import express from 'express'; //This method is concidered proffesional
const app = express()
const port = 4000

app.get('/', (req, res) => {  //direct first page and reurn homepage
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) //defining port
}) 

//After this run this we need a terminal i am using bash by ubunutu but you can use vs-code, powershell , command propt etc termianls 
//let supposse  your file name is xyz.js than first is nevigate to folder where xyz.js  is present than type node xyz.cmd  in your termianl and file will start than here is used port 4000 
//you can use any as per your wish than search on browser http://localhost:4000/ or replace 4000 with number you defined inside port variable and boom you will see hello world on going to 
//given adrress
