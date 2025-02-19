//모듈
const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();


 
//라우팅
const home = require("./src/routes/home");
const { urlencoded } = require("express");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
app.use(express.urlencoded({ extended:true }));


app.use("/",home); // use -> 미들 웨어를 등록해주는 메서드.

module.exports = app;




