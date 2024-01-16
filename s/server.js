const express=require('express');
port=5000;
const db=require('./db.js');
const app=express();
const routes=require('./routes/task')
const body_parser=require('body-parser');
app.use(body_parser.json());
app.use('/tasks',routes);

app.listen(port, (error) =>{
    if(error){
        console.error(err);
    }
    console.log(`Connection on ${port}`);
});