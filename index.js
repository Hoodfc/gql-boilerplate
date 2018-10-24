import express from "express";
import { ApolloServer } from "apollo-server-express";
// import cors from "cors";
import schema from "./schema";

const PORT = process.env.PORT || 3500;
const app = express();

// app.use(cors("*"));
// app.use(authMiddleware);

// const context = ({ req }) => ({
//   model,
//   user: req.user
// });

const server = new ApolloServer({
  schema,
  playground: true
});

server.applyMiddleware({ app });

app.get("/api", (req, res) => {
  res.send({ hello: "there" });
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
