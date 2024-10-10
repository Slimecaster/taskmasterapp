const express = require('express');
const path = require("path");
const app = express();
const logger = require('./middleware/logger');

//Middleware
app.use(logger);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname+'/public/homepage.html');
});

// Route til at håndtere POST-anmodninger
app.post('/submit',(req,res)=>{
    //Få dataen fra POST-anmodningens krop
    const data=req.body;
    res.json({
        message:'Data received',
        data:data
    });
});

module.exports = app;