const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');


const userSchema = require("./schema");
const routes = require("./routes/mongodb-routes.js")

const port = 6969;

const mongoosePath = "mongodb://127.0.0.1:27017/";

const app = express();

app.use(bodyparser.json());
app.use(cors('*'));
app.use('/',routes);

mongoose.connect(mongoosePath,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("connected to db");
    }
})

app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`Server is listening to ${port}`);
    }
});



