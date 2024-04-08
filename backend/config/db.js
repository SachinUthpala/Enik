const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DataBase Connected Successfully");
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDb;
