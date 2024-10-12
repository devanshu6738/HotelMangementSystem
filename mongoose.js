const mongoose=require("mongoose");
const Url="mongodb://localhost:27017/hotelsManage";

mongoose.connect(Url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
const db=mongoose.connection;
db.on('connected',()=>{
    console.log("Connected to Mongodb server")
})
db.on('error',()=>{
    console.error("internal server error")
})
db.on('disconnected',()=>{
    console.log("disconnected to the mongodb server")
})
module.exports=db;
