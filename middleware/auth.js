const { request } = require("express");
const jwt = require("jsonwebtoken");
const autho= process.env.SECRET_JWT;
require("dotenv").config();
const Auth = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ errorMessage: "unauthorized User" });
  }
  const verified = jwt.verify(token, autho);
  req.user = verified.user;

  next();
};

module.exports = Auth;
