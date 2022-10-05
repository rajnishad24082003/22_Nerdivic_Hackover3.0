const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");
const session = require("express-session");
dotenv.config({path:"./config/config.env"});
const  exphbs =  require('express-handlebars');

//passport
const passport = require("passport");
require("./authentication/passport_admin")(passport);
require("./authentication/passport_organiser")(passport);
//passport

//database
const connected = require("./database/database");
const connectToDataBase = require("./database/database");
//database

const app = express();

//dotenv
connectToDataBase();
//dotenv

app.use(express.urlencoded({extended:false}));

app.get("/google/callback/admin",(req,res)=>{
  res.redirect("http://localhost:3000/dashboard/admin");
})

app.get("/auth/google/As_admin",(req,res,next)=>{
      next();
},passport.authenticate('google',{scope:["profile"]}))

app.get("/google/callback/organiser",(req,res)=>{
  res.redirect("http://localhost:3000/dashboard/organiser");
})

app.get("/auth/google/As_organiser",(req,res,next)=>{
      next();
},passport.authenticate('google',{scope:["profile"]}))

app.get("/google/callback/customer",(req,res)=>{
  res.redirect("http://localhost:3000/dashboard/customer");
})

app.get("/auth/google/As_customer",(req,res,next)=>{
      next();
},passport.authenticate('google',{scope:["profile"]}))

app.listen(5000,()=>{
    console.log("server is running on port 5000");
})