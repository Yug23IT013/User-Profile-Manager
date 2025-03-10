const path = require("path");
require("dotenv").config();

const connectDB = require(path.join(__dirname, "db"));
const User = require(path.join(__dirname, "models", "User"));

connectDB();

const addUser = async () => {
  try {
    const newUser = new User({
      name: "John Doe",
      email: "johndoe@example.com",
      age: 30,
    });

    await newUser.save();
    console.log("User added successfully:", newUser);
    process.exit();
  } catch (error) {
    console.error("Error adding user:", error);
    process.exit(1);
  }
};

addUser();
