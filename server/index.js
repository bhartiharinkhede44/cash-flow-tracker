import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Transaction from "./models/Transcation.js";
import { getApiHealth } from "./controlers/Health.js";
import {postApiTranscation,getApiTranscation} from "./controlers/Transcation.js";
dotenv.config();

const app = express();
app.use(express.json());



app.get('/health',getApiHealth )

app.post('/api/transcation',postApiTranscation);

app.get('/api/transitions', getApiTranscation);




const connectDB = async () => {
  try{
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    if (conn)
      console.log('mongoDB connect succesfully.')
  }catch(e){
    console.log(e.message)
  }
  
}
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
