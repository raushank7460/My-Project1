const express=require("express");
const mongoose = require("mongoose");

const app=express();

const mogo_url="mongodb://127.0.0.1:27017/wanderlust";

main().then(()=>{
    console.log("connected to DB");
}).catch(err=>{
    console.log(err);
})

async function main() {
    await mongoose.connect(mogo_url);
    
}


const port = 8080;

app.get('/',(req,res)=>{
    res.send("Hi i am root");
})

app.listen(port,()=>{
    console.log(`sever is running at ${port}`);

})