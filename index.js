const express = require("express");
// const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/userRoute");
const bookRoute = require("./routes/bookRoute");
const dbConnection = require("./db/db");
const {userModel, bookModel} = require("./model/export")

dotenv.config();

const app = express();
app.use(express.json());

dbConnection();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome...",
  });
});

app.use("/users", userRoute);
app.use("/books", bookRoute);

// app.all('*', (req,res) =>{
//     res.status(500).json({
//         message: "Not Build yet"
//     })
// })

const PORT = 8081;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
