const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({
  path: "./cfg.env",
});

const DataBase = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.PASSWORD
);
mongoose.connect(DataBase).then(() => console.log("database connected"));
const app = require("./app");

app.listen(process.env.port || 8080, () => {
  console.log(`server is running at port ${process.env.port} `);
});
