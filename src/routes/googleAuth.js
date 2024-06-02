import express from "express";
import passport from "passport";
import googleAuth from "../controller/googleAuth.js";
import "../config/passport.js"; 
const googleRoute = express.Router();
googleRoute.get('/google',passport.authenticate('google', { scope: ['email', 'profile'] }));
googleRoute.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/google/protected",
    failureRedirect: "/google/failure",
  })
);
googleRoute.get("/google/protected",googleAuth);
googleRoute.get("/google/failure",(req,res)=>{
res.send("Authentication Failed!");
})

export default googleRoute;

