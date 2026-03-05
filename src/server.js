require("dotenv").config();
console.log("HOST:", process.env.DB_HOST);
console.log("USER:", process.env.DB_USER);
const app = require("./app");
app.listen(3331,'0.0.0.0', () => console.log("Server is on"));