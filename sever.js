require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { sequelize } = require("./config/db");
const cartRoutes = require("./routes/cartRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/cart", cartRoutes);

sequelize.sync().then(() => {
  console.log("Database synced");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

