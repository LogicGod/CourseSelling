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
    mongoose.connect(
        "mongodb+srv://yashbadak:L6SgqINxHqGGoxPb@cluster0.inssk.mongodb.net/CourseSellingApplication");
app.listen(3001);
