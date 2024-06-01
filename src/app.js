import express from "express";
import dotenv from "dotenv";
import routeUser from "./routes/user.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/users", routeUser);
app.get("/", (req, res) => {
  res.send("Welcome on Home end Point, Let's Go!");
});

export default app;
