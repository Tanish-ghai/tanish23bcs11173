import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const products = [
  {
    id: 1,
    name: "Smart Watch",
    price: 2499,
    image: "https://via.placeholder.com/250",
    description: "Tracks steps, sleep, HR, and more."
  }
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(5000, () => console.log("Server running on port 5000"));
