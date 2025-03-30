const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const auth = require("../middleware/auth");

const userController = require("../controllers/userController");
const signupController = require("../controllers/signupController");
const loginController = require("../controllers/loginController");

router.post(
  "/signup",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
    check("address", "Address is required").not().isEmpty(),
  ],
  signupController.signup
);

router.post(
  "/login",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  loginController.login
);

router.get("/profile", auth, userController.getUserProfile);

router.put("/profile", auth, userController.updateUserProfile);

router.delete("/profile", auth, userController.deleteUser);

module.exports = router;
