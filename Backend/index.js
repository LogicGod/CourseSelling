const express = require('express');
const mongoose = require('mongoose'); 
const cors = require('cors');
const app = express();
const {user} = require('./Routes/userroutes');
const Admin = require('./Routes/Adminroutes');
app.use(cors());
app.use(express.json());
app.use("/admin" , Admin);
app.use("/user" , user);

app.get("/" , (req , res)=>
{
    res.send("Hi Pune");
});

mongoose.connect("mongodb://127.0.0.1:27017/CourseSellingapp");
app.listen(3000);
