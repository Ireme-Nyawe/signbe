import express from "express";
import { signIn, signUp } from "../controller/user.js";
const routeUser = express.Router();
routeUser.post("/signup", signUp);
routeUser.post("/signin",signIn)
export default routeUser;
