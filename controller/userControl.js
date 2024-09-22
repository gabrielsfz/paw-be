const User = require("../models/userModels");

exports.createUser = async (req, res) => {
    const { name, password } = req.body;
  
    const user = new User({
      name,
      password
    });
    user
      .save()
      .then(() => {
        res.status(200).json({
          message: "User created successfully!",
          data: name
        });
      })
      .catch((err) => {
        res.status(400).json({
          error: err
        });
      });
  };

  exports.readUser = async (req, res) => {
    User.find()
      .then((users) => {
        res.status(200).json({
          data: users
        });
      })
      .catch((err) => {
        res.status(400).json({
          error: err
        });
      });
  };

  exports.deleteUser = async (req, res) => {
    const { name } = req.params;

    User.findByIdAndDelete(name)
      .then(() => {
        res.status(200).json({
          message: "User deleted successfully!"
        });
      })
      .catch((err) => {
        res.status(400).json({
          error: err
        });
      });
  };