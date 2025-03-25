const express = require('express');
const mongoose = require('mongoose'); 
const cors = require('cors');
const dotenv = require('dotenv')
dotenv.config();
const app = express();
const {user} = require('./Routes/userroutes');
const Admin = require('./Routes/Adminroutes');
const HomeData = require("./Routes/HomeData");
app.use(cors({
    origin : process.env.FRONTEND_URL
}));
app.use(express.json());
app.use("/api/admin" , Admin);
app.use("/api/user" , user);
app.use("/api/Home" , HomeData);
    mongoose.connect(process.env.MONGO_DB_URL)
    .then(() => console.log("Connected")
    )
    .catch((err) => console.error("Error While connecting"));

app.listen(process.env.PORT_NO);
