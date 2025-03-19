const mongoose = require('mongoose');
const {Schema} = mongoose;

const HomeSchema = new Schema ({

    title : {type : String , require : true},
    price : {type : String, require  :true},
    offer : {type : String },
    discount : {type : String},
    imageurl : {type : String , require : true}
});

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


const HomeDatamodel = mongoose.model("HomeData" , HomeSchema);
const Coursemodel = mongoose.model("Courses" , courseSchema);

module.exports = {
    HomeDatamodel ,
    Coursemodel
}