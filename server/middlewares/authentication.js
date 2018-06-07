const { user } = require("../models");
const bcrypt = require("bcrypt");

module.exports = function(req, res, next) {
  let username = req.body.username;
  user
    .findOne({ username })
    .then(user => {
      if (user) {
        let isPasswordTrue = bcrypt.compareSync(
          req.body.password,
          user.password
        );
        if (isPasswordTrue) {
          next();
        }
      }
      res.status(400).json({
        message: "username / password wrong"
      });
    })
    .catch(err => {
      console.log(err);
    });
};
