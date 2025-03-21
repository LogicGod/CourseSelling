const mongoose = require('mongoose');
const {Schema} = mongoose;

const HomeSchema = new Schema ({

    title : {type : String , require : true},
    id : {type : String , require : true , unique : true},
    price : {type : String, require  :true},
    offer : {type : String },
    discount : {type : String},
    imageurl : {type : String , require : true}
});

const courseSchema = new Schema(
    {
        title : { type : String , require : true , unique : true},
        id : {type : String , require : true , unique : true},
        info : { type : String , unique : true},
        price : { type : String , require : true },
        discount : {type : String , require : true},
        offer : {type : String},
        imageurl : { type : String , require : true }

    }
);

const purchaseSchema = new Schema(
    {
        title : { type : String , require : true , unique : true},
        id : {type : String , require : true , unique : true},
        imageurl : { type : String , require : true }

    }
);

const HomeDatamodel = mongoose.model("HomeData" , HomeSchema);
const Coursemodel = mongoose.model("Courses" , courseSchema);
const Purchasemodel = mongoose.model("Purchase" , purchaseSchema);

module.exports = {
    HomeDatamodel ,
    Coursemodel,
    Purchasemodel
}