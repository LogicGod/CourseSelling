const {Router} = require('express');
const {HomeDatamodel} = require("../Databasemodel/coursemodel");
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

module.exports = HomeData;