const express = require('express');
const mongoose = require('mongoose');
require('dontenv').config();

const app = express();
console.log(process.env.MONGODB);
mongoose.connect(process.env.MONGODB, { useNewUrlParser: true }).then(() => {
  console.log('MongoDB connected.');
  app.listen({ port: 5000 }).then(({ url }) => {
    console.log(`Server running at ${url}`);
  });
});
