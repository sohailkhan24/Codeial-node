const express = require("express");
const users = require("../controllers/users_controller");

const router = express.Router();

router.get("/profile", users.profile);

module.exports = router;
