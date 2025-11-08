import React from "react";
import ProductCard from "./productcard";

function App() {
  const product = {
    name: "Wireless Earbuds",
    price: 1299,
    image: "https://via.placeholder.com/250",
    description: "High quality sound with long battery life."
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
      <ProductCard
        name={product.name}
        price={product.price}
        image={product.image}
        description={product.description}
      />
    </div>
  );
}

export default App;
