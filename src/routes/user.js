import express from "express";
import { signUp } from "../controller/user.js";
const routeUser = express.Router();
routeUser.post("/signup", signUp);
export default routeUser;
