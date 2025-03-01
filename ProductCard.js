import React from "react";
import axios from "axios";

const ProductCard = ({ product }) => {
  const addToWishlist = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:5000/api/wishlist/add",
        { productId: product.id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Added to Wishlist!");
    } catch (error) {
      console.error("Error adding to wishlist:", error);
    }
  };

  return (
    <div>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={addToWishlist}>Add to Wishlist</button>
    </div>
  );
};

export default ProductCard;
