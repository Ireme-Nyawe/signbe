import express from "express";
import dotenv from "dotenv";
import routeUser from "./routes/user.js";
import session from "express-session";
import passport from "passport";
import googleRoute from "./routes/googleAuth.js";
import cors from "cors";


const app = express();
dotenv.config();
app.use(cors());
app.use(
    session({
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false },
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
app.use(express.json());

app.use("/", routeUser);
app.use("/",googleRoute);

app.get("/", (req, res) => {
  res.send("Welcome on Home end Point, Let's Go!");
});

export default app;
