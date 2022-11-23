const router = require("express").Router();
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const config = require("../config");
const checkJwt = require("../middlewear/checkjwd");

router.post("/signup", (req, res, next) => {
  let user = new User();
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password;

  User.findOne({ email: req.body.email }, (err, userData) => {
    if (userData) {
      res.json({
        success: false,
        message: "User already exist",
      });
    } else {
      user.save();
      const token = jwt.sign(
        {
          user: user,
        },
        config.secret,
        { expiresIn: "1d" }
      );
      res.json({
        success: true,
        message: "User  Created"
      });
    }
  });
});

router.route("/data").get(checkJwt, (req, res, next) => {
  User.findOne({ _id: req.decoded.user._id }, (err, user) => {
    res.json({
      success: true,
      message: "Successful",
      user: user,
    });
  });
});

router.post("/login", (req, res, next) => {
    User.findOne({ email: req.body.email }, (err, userData) => {
      if (err) throw err;
      if (!userData) {
        res.json({
          success: false,
          message: "User Not Found",
        });
      } else if (userData) {
        const validPassword = req.body.password === userData.password;
        if (validPassword) {
          const token = jwt.sign(
            {
              user: userData,
            },
            config.secret,
            { expiresIn: "1d" }
          );
          res.json({
            success: true,
            message: "Login Successfully",
            token: token,
          });
        } else {
          res.json({
            success: false,
            message: "Invalid Password",
          });
        }
      }
    });
  });
module.exports = router;