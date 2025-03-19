const mongoose = require('mongoose');
const {Schema} = mongoose;

const courseSchema = new Schema(
    {
        title : { type : String , require : true , unique : true},
        info : { type : String , unique : true},
        price : { type : Number , require : true },
        discount : {type : Number , require : true},
        offer : {type : String},
        imageurl : { type : String , require : true }

    }
);

const Coursemodel = mongoose.model("Courses" , courseSchema);

module.exports = {
    Coursemodel
}