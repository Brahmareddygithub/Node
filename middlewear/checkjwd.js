const jwt = require("jsonwebtoken");
const config = require("../config");

module.exports = function (req, res, next) {
  let token = req.header("authorization");

  if (token) {
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        res.json({
          success: false,
          message: "Authentication Failed",
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.status(403).json({
      success: false,
      message: "No token provided",
    });
  }
};