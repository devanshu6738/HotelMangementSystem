const express=require("express");
const router=express.Router();
const Person=require("./../models/person")
router.get('/',async(req,res)=>{
   try {
    const data=await Person.find();
    console.log("data fetched");
    res.status(200).json(data);
   } catch (error) {
    console.log(error);
    res.status(500).json({error:"Internal server error"})
    }
})
router.post("/",async(req,res)=>{
    try {
        const data=req.body;
        const newPerson=new Person(data);
        const savedPerson=await newPerson.save();
        console.log("data saved")
        res.status(200).json(savedPerson);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server error"})
    }
})
router.get('/:workType',async(req,res)=>{
    try {
        const workType=req.params.workType;
        if(workType=='cheif'||'owner'||'manager'||'waiter'){
            const response=await Person.find({
                work:workType
            })
            console.log("response fetched");
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error:'Invalid workType'})
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server error"})
    }
})
router.put("/:id",async(req,res)=>{
    try{
     const personId=req.params.id;
     const updatedPersondata=req.data;
     const response=await Person.findByIdAndDelete(personId,updatedPersondata,{
        new:true,
        runValidator:true,
     })
     if(!response){
        return res.status(404).json({error:"person not found"});
     }
     console.log("data updated")
     res.status(200).json(response);
    }catch(error){
        console.log(error)
        res.status(500).json({error:"Internal server error"})
    }
})
router.delete('/:id',async(req,res)=>{
    try {
        const personId=req.params.id;
        const response=await Person.findByIdAndRemove(personId);
        if(!response){
            return res.status(404).json({error:"Person not found"})
        }
        console.log("data delete")
        res.status(200).json({message:"Person Deleted Successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"internal server error"})
    }
})

module.exports=router;