const express = require("express");

const {getAllUsers,getAllContact,deleteUserbyid} = require("../controllers/admin-controller");
const  authMiddleware = require("../middleware/authmiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const router = express.Router();

router.get("/user",authMiddleware,adminMiddleware,getAllUsers);
router.delete("/user/delete/:id",authMiddleware,adminMiddleware,deleteUserbyid);
router.get("/contact", getAllContact);

module.exports = router;
