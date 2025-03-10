const path = require("path");
require("dotenv").config();

const connectDB = require(path.join(__dirname, "db"));
const User = require(path.join(__dirname, "models", "User"));

connectDB();


const fetchUsers = async () => {
  try {
    const users = await User.find();
    console.log("All Users:", users);
    process.exit();
  } catch (error) {
    console.error("Error fetching users:", error);
    process.exit(1);
  }
};

fetchUsers();
