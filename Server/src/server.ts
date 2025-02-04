import express from 'express'
import authRoutes from "./Routes/authRoutes";
import playerRoutes from "./Routes/herosRoutes";
import cookieParser from 'cookie-parser';
import cors from"cors"
import mongoose from 'mongoose';
import 'dotenv/config';

const app = express()
const port = 3000;
app.use(cookieParser());
app.use(express.json());
app.use(express.static('public'));
app.use(cors({
  origin: 'http://localhost:5173', // Exact origin, not wildcard
  credentials: true
}));


export const secretKey = process.env.SECRET_JWT || "1234";
export const saltRounds = Number(process.env.SALT_BCRYPT) || 3;


app.use("/api/auth/", authRoutes);
app.use("/api/heroes", playerRoutes);

const dbUrl = process.env.DB_URL;
const database = 'football';

//connection
mongoose.connect(`${dbUrl}/${database}`).then(()=>{
    console.info("DB connected")
}).catch((err)=>{
    console.error(err)
});
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})