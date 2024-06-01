import app from "./app.js";
import mongoose from "mongoose";
mongoose.set("strictQuery",false);
mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("DB Connected Success!")
})
const port = process.env.PORT || 7000
app.listen(port,()=>{
    console.log(`App is running on: http://localhost:${port}`);
})