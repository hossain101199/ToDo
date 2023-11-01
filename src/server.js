const app = require("./app");
const { port } = require("./config");
const pool = require("./db");

async function main() {
  try {
    pool.connect((error) => {
      if (error) {
        console.log(`error occurred while connecting ${error}`);
      } else {
        console.log("connection created with postgres successfully");
      }
    });

    // pool.query(
    //   "CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(255), gender VARCHAR(6) CHECK (gender IN ('male', 'female')), designation VARCHAR(255), phoneNumber VARCHAR(20) UNIQUE, password VARCHAR(255), created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);",
    //   (error) => {
    //     if (error) {
    //       console.log(`error occurred while creating users table ${error}`);
    //     } else {
    //       console.log("users table created");
    //     }
    //   }
    // );
    // pool.query(
    //   "CREATE TABLE todos ( id SERIAL PRIMARY KEY, title VARCHAR(255), description TEXT, is_done BOOLEAN DEFAULT false, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, user_id INTEGER REFERENCES users(id));",
    //   (error) => {
    //     if (error) {
    //       console.log(`error occurred while creating users table ${error}`);
    //     } else {
    //       console.log("users table created");
    //     }
    //   }
    // );

    // Start the server
    app.listen(port, () => {
      console.log(`app listening on port ${port} | http://localhost:${port}`);
    });
  } catch (error) {
    console.log("Failed to connect", error);
  }
}

main();
