const express = require("express");
const {service}=require("../controllers/service-controller")

const router = express.Router();




router.get("/service",service);

module.exports = router;