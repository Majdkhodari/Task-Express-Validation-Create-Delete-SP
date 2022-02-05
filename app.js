const express = require("express");
const cors = require("cors");
const connectDb = require("./database");
const productsRoutes = require("./api/products/routes");

const app = express();
connectDb();

app.use(cors());
app.use(express.json());

// Routes
app.use("/products", productsRoutes);

app.listen(process.env.PORT || 5000);

console.log(port);
