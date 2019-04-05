const jwt = require("jsonwebtoken");
const secret =
  process.env.JWT_SECRET ||
  "add a .env file to root of project with the JWT_SECRET variable";
module.exports = user => {
  const payload = {
    subject: user.id,
    username: user.username,
    iat: new Date().getTime()
  };
  const options = {
    expiresIn: "2h"
  };

  return jwt.sign(payload, secret, options);
};
