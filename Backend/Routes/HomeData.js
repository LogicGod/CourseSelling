const {Router} = require('express');
const {HomeDatamodel, Coursemodel, Purchasemodel} = require("../Databasemodel/coursemodel");
const HomeData = Router();

HomeData.get("/gethomedata", async(req, res) => {
    try {
        // Remove the array brackets - find() doesn't take an array parameter
        const Alldata = await HomeDatamodel.find();
        
        if(Alldata) {
            res.status(200).json({Alldata});
        } else {
            res.status(503).json({message: "Error While Responding"});
        }
    } catch(e) {
        console.error("Error fetching home data:", e);
        res.status(501).send("Server Down");
    }
});
HomeData.get("/getcoursedata", async(req, res) => {
    try {
        // Remove the array brackets - find() doesn't take an array parameter
        const Alldata = await Coursemodel.find();
        
        if(Alldata) {
            res.status(200).json({Alldata});
        } else {
            res.status(503).json({message: "Error While Responding"});
        }
    } catch(e) {
        console.error("Error fetching home data:", e);
        res.status(501).send("Server Down");
    }
});

HomeData.get("/getpurchasedata", async(req, res) => {
    try {
        // Remove the array brackets - find() doesn't take an array parameter
        const Alldata = await Purchasemodel.find();
        
        if(Alldata) {
            res.status(200).json({Alldata});
        } else {
            res.status(503).json({message: "Error While Responding"});
        }
    } catch(e) {
        console.error("Error fetching home data:", e);
        res.status(501).send("Server Down");
    }
});


module.exports =HomeData;