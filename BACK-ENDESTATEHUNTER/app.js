const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
var multer = require("multer");

var upload = multer({ dest: "uploads/" });

//use this to access the body req
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(upload.array("img", 5));

const UserRouter = require("./router/userRouter");
const AdminRouter = require("./router/adminRouter");
const AdsRouter = require("./router/adsRouter");
const AccountRouter = require("./router/accountRouter");

app.use(morgan("dev"));
app.use(cors());
app.use("/api/v1/users", UserRouter);
app.use("/api/v1/admin", AdminRouter);
app.use("/api/v1/ads", AdsRouter);
app.use("/api/v1/account", AccountRouter);
module.exports = app;
