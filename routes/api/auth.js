const express = require("express");
const router = express.Router();
const bycrypt = require("bcryptjs");
const auth = require("../../middleware/auth");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator/check"); //Uses this to validate our data.

const User = require("../../models/User");

/**
 * @route GET api/auth
 * @Descrption Test route
 * @access Public
 * @auth middleware for authenticating token.
 */
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

/**
 * @route       POST api/auth
 * @Descrption  Authenticate user & get token
 * @access      Public
 */
router.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Please is required").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // See if the user exist
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      const isMatch = await bycrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      // Return jsonwebtoken
      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      //Something is wrong with the server
      console.log(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
