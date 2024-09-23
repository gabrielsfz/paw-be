const dotenv = require("dotenv");
const path = require("path");
const mongoose = require("mongoose");

dotenv.config({ path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`) });

const app = require("./app");

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.info(`Server running on port ${PORT}`);
});

if (!process.env.MONGO_URI) {
  throw Error("Database connection string not found");
}
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Succesfully connected to MongoDB");
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB");
    console.log(err);
  });
