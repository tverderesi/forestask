const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
console.log(process.env.MONGODB);
mongoose.connect(process.env.MONGODB, { useNewUrlParser: true }).then(() => {
  console.log('MongoDB connected.');
});
