import express from "express";

const app =express();

app.get("/",(req,res)=>{
    res.send("Welcome on Home end Point, Let's Go!");
})

const port = process.env.PORT || 7000
app.listen(port,()=>{
    console.log(`App is running on: http://localhost:${port}`);
})
