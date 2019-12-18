const jwt = require("jsonwebtoken");
const config = require("config");

//Function which has access to reqest resopnse cycle --> next is call back which runs when done.
module.exports = function(req, res, next) {
  //Get token from header
  const token = req.header("x-auth-token");

  // Check if no token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  //Veryfy token
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    req.user = decoded.user;
    next(); //When middleware finished
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
