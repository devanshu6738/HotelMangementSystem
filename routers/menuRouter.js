const express=require("express")
const router=express.Router();
const MenuItems=require("./../models/menu");

router.post('/',async(req,res)=>{
    try {
        const data=req.body;
        const newMenu=new MenuItems(data);
        const response=await newMenu.save();
        console.log("data saved")
        res.status(200).json(response)
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server error"})
    }
})
router.get('/',async(req,res)=>{
   try {
    const data=await MenuItems.find();
    console.log("data saved")
    res.status(200).json(data);
   } catch (error) {
    console.log(error)
    res.status(500).json({error:"Internal server error"})
   }
})

module.exports=router;