const config = require("../../../config");
const pool = require("../../../db");
const ApiError = require("../../../errors/ApiError");
var jwt = require("jsonwebtoken");

const createUserInDB = async (payload) => {
  const { name, gender, designation, phoneNumber, password } = payload;
  const query =
    "INSERT INTO users (name, gender, designation, phoneNumber, password) VALUES ($1, $2, $3, $4, $5) RETURNING *";
  const values = [name, gender, designation, phoneNumber, password];

  const createdUser = await pool.query(query, values);
  return createdUser.rows[0];
};

const loginUser = async (payload) => {
  const { phoneNumber, password } = payload;
  const query = "SELECT * FROM users WHERE phoneNumber = $1";
  const values = [phoneNumber];

  const result = await pool.query(query, values);
  const user = result.rows[0];
  console.log(user);
  if (user) {
    if (user.password === password) {
      const { id, name, phonenumber } = user;

      const accessToken = jwt.sign(
        {
          id,
          name,
          phonenumber,
        },
        config.jwt.secret,
        { expiresIn: config.jwt.expires_in }
      );

      return {
        accessToken,
      };
    } else {
      throw new ApiError(401, "Invalid password");
    }
  } else {
    throw new ApiError(404, "User does not exist");
  }
};

const authService = {
  createUserInDB,
  loginUser,
};

module.exports = authService;
