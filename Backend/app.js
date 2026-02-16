const express=require("express");
const app=express();

const port=4000;

app.listen(port,()=>{
    console.log("server is running ");
})

app.get("/username",(req,res)=>{
    res.render("data is sucessfully sent .");
})