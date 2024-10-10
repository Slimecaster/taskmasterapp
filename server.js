const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require("path");
const port = 3000;

app.use(express.json());
//Middleware til at parse JSON-data i POST-anmodninger.
app.use(bodyParser.json());
//Middleware til at tjene statiske filer fra en public mappe.
app.use(express.static(path.join(__dirname, 'public')));

//Array til at opbevare tasks midlertidigt på serveren
const tasks=[];

// Middleware til at logge alle indgående anmodninger
app.use((req,res,next)=>{
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

//GET /tasks: Henter alle opgaver.
app.get('/tasks',(req,res)=>{
    res.json(tasks);
});

//POST /tasks: Tilføjer en ny opgave.
app.post('/tasks',(req,res)=>{
    const task=req.body;
    tasks.push(task);
    res.json(task); //?
});

//PUT /tasks/:index: Opdaterer en eksisterende opgave baseret på det givne indeks.
app.put('/tasks/:index',(req,res)=>{
    const index=req.params.index;
    const updateTask=req.body;
    if(tasks[index]){
        tasks[index]=updateTask;
        res.json({message:'Task updated successfully.',tasks});
    }else{
        res.status(404).json({message:'Task was not found'});
    }
});

//DELETE /tasks/:index: Sletter en opgave baseret på det givne indeks.
app.delete('/tasks/:index',(req,res)=>{
    const index=req.params.index;
    if (tasks[index]){
        tasks.splice(index,1);
        res.json({message: 'Task deleted successfully.',tasks});
        }else{
        res.status(404).json({message: 'Task not found'});
    }
});

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/public/views/homepage.html');
});


app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}/`);
});
