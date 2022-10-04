const express = require("express");
const router  = express.Router();
const {signin_customer_username,signin_customer_password}  = require("../database");

router.route("/").get(signin_customer_username).post(posttask);

module.exports = router