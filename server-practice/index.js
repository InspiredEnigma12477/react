const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const StuData = require("./schema.js");
const data = require('./data.js');

const app = express();
app.use(bodyParser.json());

app.get("/home",async(req,res)=>{
    try{
        const data = await StuData.find();
        res.json(data);
    }
    catch(err){
        res.json({message:err});
    }
})

app.post("/post",async(req,res)=>{
    const post = new StuData({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        
    });
    console.log(post);
    try{
        const savedPost = await post.save();
        // res.json(savedPost);
    }catch(err){
        res.json({message:err});
    }
})

app.delete("/:dataId",async(req,res)=>{
    try{const deletePost = await data.remove({_id:req.params.dataId});
    res.json(deletePost); }
    catch(err){
        res.json({message:err});
    }
})

app.patch("/:dataId",async(req,res)=>{
    try{
        const updatedOne = await data.updateOne(
            {_id: req.params.dataId},
            {name:req.body.name,email:req.body.email,password:req.body.password}
        )
        res.json(updatedOne);
    }catch(error){
        res.json({message:error});
    }
})


// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/Studentdata", { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    },(error)=>{
        if(error){
            console.log(error);
        }else{
            console.log("connected to db");
        }
})

app.listen(3000);