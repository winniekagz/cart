require("dotenv").config();

const productData = require("./data/product");
const connectDb = require("./config/db");
const Product = require("./models/product");

connectDb();

const importData = async () => {
  try {
    await Product.deleteMany({});

    await Product.insertMany(productData);

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();