const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

bcrypt
  .compare('fl0r3st4r3f4!', process.env.TEACHER_KEY)
  .then(res => console.log('teacher ' + res));

bcrypt
  .compare('Passw0rd!', process.env.ADMIN_KEY)
  .then(res => console.log('admin ' + res));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
});

mongoose.connect(process.env.MONGODB, { useNewUrlParser: true }).then(() => {
  console.log('MongoDB connected.');
  server.listen({ port: 4000 }).then(res => {
    console.log(`Server running at ${res.url}`);
  });
});
