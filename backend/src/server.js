import express from 'express';
import dotenv from "dotenv";
import cors from"cors"
import  notesRoutes from"./routes/notesRoutes.js";
import{connectDb} from "./config/db.js";
import ratelimiter from"./middleware/rateLimiter.js";
dotenv.config();
const app = express();
const PORT=process.env.port||5001
//middleware
app.use(
    cors({
    origin:"http://localhost:5173",
}));
app.use(express.json());
app.use(ratelimiter)
app.use('/api/notes',notesRoutes)
connectDb().then(()=>{app.listen(PORT,()=>{
    console.log('Server is started on PORT ',PORT)
});})


