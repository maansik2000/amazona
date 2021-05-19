import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));

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

app.use('/api/users', userRouter);

app.use('/api/products', productRouter);

//send a ajax response and send project id
// app.get("/api/products/:id", (req, res) => {
//   const product = data.products.find((x) => x._id === req.params.id);
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: "product not found" });
//   }
// });

//send a ajax response and send project
// app.get("/api/products", (req, res) => {
//   res.send(data.products);
// });



app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(`server at http://localhost:${port}`);
});
