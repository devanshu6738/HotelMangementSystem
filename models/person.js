const mongoose=require("mongoose");

const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    work:{
        type:String,
        enum:["waiter","cheif","owner","manager"],
        required:true,
    },
    mobile:{
        type:Number,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    salary:{
        type:Number,
        required:true,
    }
})
const Person=mongoose.model('Person',personSchema);
module.exports=Person;