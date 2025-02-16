const express = require('express');
const port = 8080;
const app = express();
const path = require('path');

const database = require('./config/db');
database();

app.set('view engine','ejs');

app.use(express.urlencoded());
app.use(express.static(path.join(__dirname,'config')));
app.use(express.static(path.join(__dirname,'uploads')));

app.use('/',require('./routes/indexRoute'));

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`server is running on host :- ${port}`);    
});