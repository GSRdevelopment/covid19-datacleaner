const app = require("./app");
const dotenv = require("dotenv");

dotenv.config({
  path: "./config.env",
});

// Start Server

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
