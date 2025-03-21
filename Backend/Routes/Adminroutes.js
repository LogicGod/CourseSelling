const {Router} = require('express');
const {Coursemodel , HomeDatamodel, Purchasemodel} = require('../Databasemodel/coursemodel');
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
            price : price,
            discount : discount,
            offer : offer ,
            imageurl : imageurl
        }
    );

    res.status(200).send("Course Added Successfully");
}
catch(err){
    res.status(500).send(err);
}
});

Admin.post("/AddHomeData" , async(req , res) =>
    {
        const {title , price , discount , offer , imageurl} = req.body;
    try
    {
        await HomeDatamodel.create(
            {
                title : title,
                price : price,
                offer : offer ,
                discount : discount,
                imageurl : imageurl
            }
        );
    
        res.status(200).send("Home Course Added Successfully");
    }
    catch(err){
        res.status(500).send(err);
    }
    });
    Admin.post("/PurchaseCourse" , async(req , res) =>
        {
            const {title , info , price , discount , offer , imageurl} = req.body;
        try
        {
            await Purchasemodel.create(
                {
                    title : title,
                    info : info,
                    price : price,
                    discount : discount,
                    offer : offer ,
                    imageurl : imageurl
                }
            );
        
            res.status(200).send("Course Added Successfully");
        }
        catch(err){
            res.status(500).send(err);
        }
        });

module.exports = Admin;