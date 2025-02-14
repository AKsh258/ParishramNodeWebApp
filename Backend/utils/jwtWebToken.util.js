// import jwt from "jsonwebtoken";
const jwt = require("jsonwebtoken");

const createJWTToken = (user) => {

  const secretkey = process.env.JWT_SECRETKEY;

  try {
    // TODL: check expires in 
    const token = jwt.sign(user, secretkey, { expiresIn: '1h' })

    return token
  } catch (error) {
    console.log({ error });
    return false;
  }
};

module.exports = { createJWTToken };
