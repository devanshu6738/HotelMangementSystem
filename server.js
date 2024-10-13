const express=require("express")
const app=express();
const db=require("./mongoose")
const PersonRoute=require("./routers/personRouter")
const MenuRoute=require("./routers/menuRouter")
app.use(express.json());

app.get("/",(req,res)=>{
    res.end("welcome to hotel");
})
app.use('/person',PersonRoute);
app.use('/menu',MenuRoute);

app.listen(3000,(req,res)=>{
    console.log("server is running at port 3000")
})