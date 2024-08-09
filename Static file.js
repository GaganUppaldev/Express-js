// Here i will use previous code But server basic.html which have a form and it is inside public folder so way to serve static files will be here
//First step is you need to create folder name public than put files inside it ypu want to serve here otherwise you face errors.
//You need to type url like this (http://localhost:4000/static/basic.html) , need to clarify that basic.html  and i will add a baisc.html here also



import express from 'express'; 
const app = express();//
const port = 4000

app.get('/', (req, res) => {  
  res.send('hey how are you buddy')
  
}) 

app.get('/home',(req,res) => {      
  res.send('This is home section')
})

app.get('/About',(req,res) => {      
  res.send('This about section')
})

app.get('/contact',(req,res) => {    
  res.send('This is contact section')
})

app.use('/static', express.static('public')) //This is code for what you are here



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) 
}) 

//below is basic.html that i served and it is in comments
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signup</title>
</head>
<body>
    <div>
        <h1>Signup Form</h1>
        <form action="/submit-signup" method="POST">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required><br><br>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required><br><br>

            <button type="submit">Signup</button>
        </form>
    </div>
</body>
</html>

*/

//======================================================================================================================================
//ABSOLUTE PATH OF DIRECTORY METHOD 
//This way is better more considered while devlopment

/*
import express from 'express';
import path from 'path';

//I got error when i was not using file from public folder but we can solveit by defining dirname manually 
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const port = 4000;

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Routes
app.get('/', (req, res) => {  
  res.send('Hey, how are you buddy?');
});

app.get('/home', (req, res) => {
  res.send('This is the home section');
});

app.get('/about', (req, res) => {
  res.send('This is the about section');
});

app.get('/contact', (req, res) => {
  res.send('This is the contact section');
});

// Serve static files from the 'public' directory
app.use('/static', express.static('public'));

// Serve a specific HTML file from other folder than public
app.get('/open', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'xyz.html'));//This method is concidered good practise and it reduce runtime errors
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});






*/





