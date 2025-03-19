const {Router} = require('express');
const {Coursemodel} = require('../Databasemodel/coursemodel');
const Admin = Router();

Admin.post("/AddCourse" , async(req , res) =>
{
    const {title , info , price , discount , offer , imageurl} = req.body;
try
{
    await Coursemodel.create(
        {
            title : title,
            info : info,
            price : parseInt(price),
            discount : parseInt(discount),
            offer : offer ,
            imageurl : imageurl
        }
    );

    res.status(200).send("Course Added Successfully");
}
catch(err){
    res.status(500).send("Error");
}
});

module.exports = Admin;