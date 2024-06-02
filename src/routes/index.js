import googleRoute from "./googleAuth.js";
import routeUser from "./user.js";
import express from "express";

const router = express.Router();

router.use("/users",routeUser);
router.use("/auth",googleRoute);

export default router;