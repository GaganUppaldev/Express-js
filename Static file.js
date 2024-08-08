// Here i will use previous code But server basic.html which have a form and it is inside public folder so way to serve static files will be here
//First step is you need to create folder name public than put files inside it ypu want to serve here otherwise you face errors.
//You need to type url like this (http://localhost:4000/static/basic.html) , need to clarify that basic.html  and i will add a baisc.html here also

//I have knowledge of Django so i can say here that biggest problem beginner will face is of Auto Restart of server after saving file so I sugess you to install Nodemon first and move next .
//Installing Nodemon is not very difficult just install for user terminal and in my case i am using bash and installed nodemon on that But i had installed it for command propt and used for few days  

//const express = require('express');

import express from 'express'; 
const app = express();// i forgot to create variable for express
const port = 4000

app.get('/', (req, res) => {  
  res.send('hey how are you buddy')
  
}) 

app.get('/home',(req,res) => {       //when you add /home to local host url like this http://localhost:4000/contact you will see This is home section means got routed to home page
  res.send('This is home section')
})

app.get('/About',(req,res) => {      // same as above just value changed
  res.send('This about section')
})

app.get('/contact',(req,res) => {    // same as above just value changed
  res.send('This is contact section')
})

app.use('/static', express.static('public'))



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) //defining port
}) 




