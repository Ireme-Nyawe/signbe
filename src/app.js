import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app =express();

app.get("/",(req,res)=>{
    res.send("Welcome on Home end Point, Let's Go!");
})


export default app;