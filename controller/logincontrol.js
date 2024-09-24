const User = require("../models/userModels"); // Assuming you have a user model
const bcrypt = require("bcryptjs"); // For password hashing
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const { name, password } = req.body;

  // Validate request body
  if (!name || !password) {
    return res.status(400).json({
      status: "fail",
      message: "Please provide both name and password",
    });
  }

  try {
    // Find the user by name
    const user = await User.findOne({ name });
    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }

    // Compare the provided password with the hashed password in DB
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        status: "fail",
        message: "Incorrect password",
      });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY);
    res.cookie("jwt", token, {
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    // Password is correct, login successful
    res.status(200).json({
      status: "success",
      message: "Login successful",
      data: {
        userId: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Server error",
      error: error.message,
    });
  }
};
