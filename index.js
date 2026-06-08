const express = require('express');
const mongoose =require('mongoose');
const dotenv = require('dotenv');
const UserRouter = require('./Routes/userRoute');
const workerRouter = require('./Routes/workerRoute');
const cors = require("cors");

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/workers", workerRouter);
app.use("/api/users", UserRouter);
//console.log(process.env.MONGO_URI);

const connectDB = require('./Config/db')

connectDB();




app.listen(port, () => {
  console.log(`app listening at:${port}`);
});