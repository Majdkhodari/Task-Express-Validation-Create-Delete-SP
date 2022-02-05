const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    price: { type: Number, default: 50 },
    image: String,
    quantity: { type: Number, minimum: 0 },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Product", ProductSchema);
