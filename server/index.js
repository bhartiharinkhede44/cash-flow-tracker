import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
// import Transaction from "./models/Transcation.js";
import { getApiHealth } from "./controlers/Health.js";
import {postApiTranscation,getApiTranscation} from "./controlers/Transcation.js";
dotenv.config();

const app = express();
app.use(express.json());



app.get('/health',getApiHealth )

app.post('/api/transcation',postApiTranscation);

app.get('/api/transitions', getApiTranscation);


const PORT = process.env.PORT || 5000;

const connectDB = async () => {
    const conn = mongoose.connect(process.env.MONGODB_URI);
    if (conn)
      console.log('mongoDB connect succesfully')
  };
  app.listen(PORT, () => {
    console.log(`server is running on ; ${PORT}`)
    connectDB();
  })
