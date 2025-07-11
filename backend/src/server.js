import express from 'express';
import dotenv from "dotenv";
import path from "path";
import cors from"cors"
import  notesRoutes from"./routes/notesRoutes.js";
import{connectDb} from "./config/db.js";
import ratelimiter from"./middleware/rateLimiter.js";
dotenv.config();
const app = express();
const PORT=process.env.port||5001
const __dirname = path.resolve()
//middleware
if(process.env.NODE_ENV !== "production"){
app.use(
    cors({
    origin:"http://localhost:5173",
}));
}
app.use(express.json());
app.use(ratelimiter)
app.use('/api/notes',notesRoutes)
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))
app.get("*",(req,res) =>{
   res.sendFile(path.join(__dirname,"../frontend","dist","index.html")) 
})
}

connectDb().then(()=>{app.listen(PORT,()=>{
    console.log('Server is started on PORT ',PORT)
});})


