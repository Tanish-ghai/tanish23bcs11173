const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/productdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Product Schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String
});

const Product = mongoose.model("Product", productSchema);

// Routes

// Create
app.post("/products", async (req, res) => {
  let product = new Product(req.body);
  await product.save();
  res.json({ message: "Product Added", product });
});

// Read (All)
app.get("/products", async (req, res) => {
  let products = await Product.find();
  res.json(products);
});

// Update
app.put("/products/:id", async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Product Updated" });
});

// Delete
app.delete("/products/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product Deleted" });
});

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
