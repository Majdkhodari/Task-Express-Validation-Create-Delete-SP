const Product = require("../../models/Product");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const Product = req.body;
    const newProduct = await Product.create(product);
    res
      .status(201)
      .json({ msg: "Product created successfuly", payload: newProduct });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const foundProduct = await Product.findByIdAndDelete(productId);

    if (foundProduct) {
      res.status(204).end();
    } else {
      res.status(404).json({ msg: "Item wasn't found, check your ID" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.updateProduct = async(req, (res) => {
  const { productId } = req.params;
  const product = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(productId, product);
    res.status(200).json({ msg: "Updated!", payload: updatedProduct });
  } catch (error) {
    res.status(400).json({ msg: "Error, couldn't update" });
  }
});
