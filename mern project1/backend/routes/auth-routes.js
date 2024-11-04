const express = require("express");
const control = require("../controllers/auth-controller"); 
const authMiddleware = require("../middleware/authmiddleware");

const router = express.Router();

router.get("/",control.home);

router.post("/register",control.register);

router.post("/login",control.login);

router.get("/user",authMiddleware,control.user);

module.exports = router;