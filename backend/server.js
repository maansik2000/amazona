import express from "express";
import dotenv from "dotenv";
import data from "./data.js";
import mongoose from "mongoose";
import userRouter from "./router/userRouter.js";
import productRouter from "./router/ProductRouter.js";
import orderRouter from "./router/orderRouter.js";

//it is te entry point of our backend

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connect to mongodb database
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/amazona", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

//our local server
app.get("/", (req, res) => {
  res.send("server is ready");
});

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

//this middleware is a error catcher
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000; //environment variable for the port

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});

/*// send a ajax response and send project id
// get the specific product from the backend
app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "product not found" });
  }
});

// send a ajax response and send product
app.get("/api/products", (req, res) => {
  res.send(data.products);
});*/
