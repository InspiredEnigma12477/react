const express = require("express");
const app = express();
const userSchema = require("../schema");

app.get('/',(req,res)=>{
    res.send("Welcome to student data server side");
})


app.get('/api/get',async(req,res)=>{
    console.log("GET request received");
    try {
        const allData = await userSchema.find();
        res.json(allData);
    } catch (error) {
        res.json({message:error});
    }

})

app.post('/api/insert',async(req,res)=>{
    console.log("POST request received");
    const savedData = new userSchema ({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    })
    try {
        const data = await savedData.save();
        res.json(data);
    } catch (error) {
        res.json({message:error});
        
    }
})

app.patch('/api/update/:patchId',async(req,res)=>{
    console.log("PATCH request received");
    try {
        const updateOne = await userSchema.updateOne(
            {_id: req.params.patchId},
            {username:req.body.username ,email:req.body.email,password:req.body.password }
        )
        res.json(updateOne);
    } catch (error) {
        res.json({message:error});
        
    }
})
app.delete('/api/delete/:deleteId',async(req,res)=>{
    console.log("DELETE request received");
    try {
        const deleted = await userSchema.remove(
            {_id: req.params.deleteId}
        )
        res.json(deleted);
    } catch (error) {
        res.json({message:error});
    }
})

module.exports = app;