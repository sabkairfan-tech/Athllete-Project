const express = require('express');
const mongoose =require('mongoose');
const dotenv = require('dotenv');
const router = require('./Routes/userRoute');

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", router);
//onsole.log(process.env.MONGO_URI);

const connectDB = require('./Config/db')

connectDB();




app.listen(port, () => {
  console.log(`app listening at:${port}`);
});