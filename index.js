const express = require('express');
const mongoose =require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
console.log(process.env.MONGO_URI);

const connectDB = require('./Config/db')
;
connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`app listening at:${port}`);
});