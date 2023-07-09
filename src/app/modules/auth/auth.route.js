const express = require("express");
const authController = require("./auth.controller");

const router = express.Router();

router.post("/signup", authController.createUser);

router.post("/login", authController.loginUser);

const authRoutes = router;
module.exports = authRoutes;
