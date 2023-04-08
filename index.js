const express = require('express');
const app= express();
const port = 8080;

const db = require('./config/mongoose');

app.use(express.json())

app.get('/', (req, res) => {
    res.send('<h2>REST APIs for CRUD App</h2>')
})

app.listen(port, function(err){
    if(err){
        console.log(`Error in running server ${err}`);
        return;
    }
    console.log(`Server is up and running on port : ${port}`)
})