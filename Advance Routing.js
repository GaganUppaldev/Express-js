//This file cover  advance routing concepts form  official documentation

import express from 'express'; 
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

app.all('/secret', (req, res, next) => {
  res.send("you can watch secret inside whole webpage")
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
})

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
