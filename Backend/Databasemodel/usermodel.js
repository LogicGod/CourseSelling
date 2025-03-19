const mongoose = require("mongoose");
const { string } = require("zod");
// const { type } = require("os");
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {type : String , require : true , unique : true},
    email: {type : String , unique : true},
    phoneno : {type : Number , require : true , unique : true},
    password: {type : String , require : true}
});



const User = mongoose.model("User" , userSchema);
module.exports =
{
    User
}