const express = require('express');
const mongoose = require('mongoose'); 
const cors = require('cors');
const app = express();
const {user} = require('./Routes/userroutes');
const Admin = require('./Routes/Adminroutes');
const HomeData = require("./Routes/HomeData");
app.use(cors());
app.use(express.json());
app.use("/admin" , Admin);
app.use("/user" , user);
app.use("/Home" , HomeData);


app.get("/" , (req , res)=>
{
    res.send("Hi Pune");
});

app.get("/" , (req , res)=>
    {
        res.send("Hi Pune mmmmmm");
    });

mongoose.connect("mongodb+srv://yashbadak:L6SgqINxHqGGoxPb@cluster0.inssk.mongodb.net/CourseSellingApplication");
app.listen(3000);
