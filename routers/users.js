const express = require("express");
const users = require("../controllers/users_controller");

const router = express.Router();

router.get("/profile", users.profile);
router.get("/sign-up", users.signUp);
router.get("/sign-in", users.signIn);

router.post("/create", users.create);
router.post("/create-session", users.createSession);

module.exports = router;
