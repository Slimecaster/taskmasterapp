const express = require('express');
const app = require ('./src/app');
const bodyParser = require('body-parser');
const port = 3000;
app.use(express.json());

app.use(bodyParser.json()); // Parse JSON bodies


app.get('/', (req, res) => {
    res.sendFile(__dirname+'/public/views/homepage.html');
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}/`);
});
