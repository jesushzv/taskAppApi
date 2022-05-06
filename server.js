const express = require("express");
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");
const { ApolloServer } = require("apollo-server-express");
const {connectDB} = require("./db");

connectDB();
const app = express();
app.use(express.json());

app.get("/", (_, res) => {
  res.send("TaskApp API");
});

const start = async () => {
  const ApolloServerInstance = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await ApolloServerInstance.start();
  await ApolloServerInstance.applyMiddleware({ app });
  app.use("*", (req, res) => {
    res.sendStatus(404);
  });
};

start();
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
