import React from "react";

function ProductCard(props) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      width: "250px",
      padding: "16px",
      textAlign: "center"
    }}>
      <img
        src={props.image}
        alt={props.name}
        style={{ width: "100%", borderRadius: "6px" }}
      />

      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <h3>₹{props.price}</h3>

      <button style={{
        padding: "8px 12px",
        backgroundColor: "blue",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer"
      }}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
