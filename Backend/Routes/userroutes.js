const { Router } = require('express')
const {z} = require("zod");
const jwt = require("jsonwebtoken");
const user = Router();
const { User } = require("../Databasemodel/usermodel");
const {SignupAuth} = require("../Middleware/Signupauth");
const jwtpass = "Yashwebdeveloper"
user.post("/Signup", async (req, res) => {
    const { name, email, phoneno, password} = req.body;

 
    await User.create({
        name: name,
        email: email,
        phoneno: parseInt(phoneno),
        password: password
    });
    res.send("Signup Successfull");
});
user.post("/Login", async (req, res) => {
    const { email, password } = req.body;

    const userer = await User.findOne({
        email: email,
        password : password
    });
    // res.send("Login Successfull");

    if (userer)
    {
        const token = jwt.sign({id : userer._id.toString()}, jwtpass)
        res.status(200).json({token : token});
    }
    else{
        res.status(403).send('User Not Found');
    }
});
module.exports =
{
    user
}