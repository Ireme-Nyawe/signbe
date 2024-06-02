import express from "express";
import passport from "passport";
import googleAuth from "../controller/googleAuth.js";
import "../config/passport.js"; 
const googleRoute = express.Router();
googleRoute.get(
  `/google`,
  passport.authenticate("google", { scope: ["email", "profile"] })
);
googleRoute.get(
  `/google/callback`,
  passport.authenticate("google", {
    successRedirect: "/protected",
    failureRedirect: "/failure",
  })
);
googleRoute.get('/protected',googleAuth);
googleRoute.get('/failure',(req,res)=>{
res.send("Authentication Failed!");
})

export default googleRoute;
