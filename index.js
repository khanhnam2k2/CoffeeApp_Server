const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const port = 3000;

// Routes
const categoryRoute = require("./routes/category");
const productRoute = require("./routes/product");

dotenv.config();
app.use(cors());

// Kết nối mongoose
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Kết nối thành công"))
  .catch((error) => console.log("Kết nối thất bại"));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use("/api/category", categoryRoute);
app.use("/api/product", productRoute);

app.listen(process.env.PORT || port, () => {
  console.log(`Máy chủ đang lắng nghe qua HTTP trên http://localhost:${port}`);
});