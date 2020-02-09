const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI"); //We can get any value out of our config file

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log("MongoDB Connected!");
  } catch (error) {
    console.log(error.message);
    //Exit process with failure.
    process.exit(1);
  }
};

module.exports = connectDB;
