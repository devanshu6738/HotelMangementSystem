const express=require("express")
const app=express();
const db=require("./mongoose")
const PersonRoute=require("./routers/personRouter")
app.use(express.json());

app.use('/person',PersonRoute);

app.listen(3000,(req,res)=>{
    console.log("server is running at port 3000")
})