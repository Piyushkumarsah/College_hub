const express = require('express');
const app  = express();
const mongoose = require('mongoose');
const Users = require("./users");
const Cors = require('cors');

const PORT = 5000;

app.use(Cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/collegeHub',{
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

app.post('/login', async (req,res)=>{
    console.log("here");
    try{
        const {email,password} = req.body;
        console.log(req.body);
        const user = await Users.findOne({email});
        if(!user){
          return res.status(404).json({message:"User Not found"});
        }
        else{
            const orgPass = user.password;
            console.log("orgpas is ",user.email,user.password)
            if(orgPass !== password){
                return res.status(404).json({message:"Wrong Password"})
            }
            const name = user.name;
            return res.status(200).json({message:"User found",userDetails:{name}});
        }
    }
    catch(error){
        return res.status(404).json({message:"Something went wrong"});
    }
})
app.post("/register", async (req,res) =>{
    const details = req.body;
    console.log(details)
    const email = details.email;
    const existingUser = await Users.findOne({email});
    if(existingUser)
    {
        console.log("user exists")
        return res.status(400).json({message:"User already exists !"});
    }
    const user = new Users(details);
    user.save();
    return res.status(200).json({message:"Successfully registered"});
})
app.listen(process.env.PORT || PORT, ()=>{
    console.log("Server is running at port",PORT);
});