var express = require('express');
var router = express.Router();

const userController = require("../controllers/user-controller");
const loginController = require("../controllers/login-controller")
const authentication = require("../middlewares/authentication");
const userAuthorization = require("../middlewares/userAuthorization")

router.get("/", userController.getAllUsers);
router.put("/:username", userAuthorization, userController.updateUser);
router.delete("/:username", userAuthorization, userController.deleteUser);

router.post("/register", loginController.register);
router.post("/login", authentication, loginController.login);

module.exports = router;
