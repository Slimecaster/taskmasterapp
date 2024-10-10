const express = require('express');
const app = express();
const port = 3000;
const path=require('path');

app.use(express.json());

app.use((req,res,next)=>{
    console.log(`${req.method} request for ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/public/views/homepage.html');
});

// Middleware til at tjene statiske filer fra 'public'-mappen
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}/`);
});
