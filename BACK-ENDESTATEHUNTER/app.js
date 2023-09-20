const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const upload = require("./utils/multer");

//use this to access the body req
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(upload.single("img"));
const UserRouter = require("./router/userRouter");
const AdminRouter = require("./router/adminRouter");
const AdsRouter = require("./router/adsRouter");

app.use(morgan("dev"));
app.use(cors());
app.use("/api/v1/users", UserRouter);
app.use("/api/v1/admin", AdminRouter);
app.use("/api/v1/ads", AdsRouter);

module.exports = app;
