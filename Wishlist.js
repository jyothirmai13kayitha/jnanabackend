import React, { useState, useEffect } from "react";
import axios from "axios";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  // Fetch Wishlist from Backend
  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:5000/api/wishlist", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setWishlist(response.data);
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    }
  };

  // Remove Item from Wishlist
  const removeFromWishlist = async (productId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/api/wishlist/remove`, {
        headers: { Authorization: `Bearer ${token}` },
        data: { productId },
      });
      setWishlist(wishlist.filter((item) => item.id !== productId));
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  return (
    <div>
      <h2>My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul>
          {wishlist.map((item) => (
            <li key={item.id}>
              <h4>{item.name}</h4>
              <p>Price: ${item.price}</p>
              <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
