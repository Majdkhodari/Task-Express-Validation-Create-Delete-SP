const express = require("express");

const {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("./controllers");

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.delete("/productId", deleteProduct);
router.put("/productId", updateProduct);

module.exports = router;
