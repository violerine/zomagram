const { user } = require("../models");
const bcrypt = require("bcrypt");

module.exports = function(req, res, next) {
  console.log("REQ BODY",req.body)
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
      console.log('errorrrorororo')
      res.status(400).send({
        message: "username / password wrong"
      });
    })
    .catch(err => {
      console.log(err);
    });
};
