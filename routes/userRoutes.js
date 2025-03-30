const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const auth = require("../middleware/auth");

const userController = require("../controllers/userController");
const signupController = require("../controllers/signupController");
const loginController = require("../controllers/loginController");

// @route   POST /api/users/signup
// @desc    Register a user
// @access  Public
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

// @route   POST /api/users/login
// @desc    Authenticate user & get token
// @access  Public
router.post(
  "/login",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  loginController.login
);

// @route   GET /api/users/profile
// @desc    Get user profile
// @access  Private
router.get("/profile", auth, userController.getUserProfile);

// @route   PUT /api/users/profile
// @desc    Update user profile
// @access  Private
router.put("/profile", auth, userController.updateUserProfile);

// @route   DELETE /api/users/profile
// @desc    Delete user
// @access  Private
router.delete("/profile", auth, userController.deleteUser);

module.exports = router;
