import express from "express";
import { cartRouter, productRouter, userRouter } from "./routes/index.js";
import { authorizationMiddleware, errorHandler } from "./middlewares/index.js";

const PORT = 3000;

const server = express();

server.use(express.json());

server.use("/", userRouter);

server.use(authorizationMiddleware);
server.use("/product", productRouter);
server.use("/cart", cartRouter);
server.use(errorHandler);

server.listen(PORT, () => {
  console.log(`oi, estou funcionando na port ${PORT}`);
});
