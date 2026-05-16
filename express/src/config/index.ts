import dotenv from "dotenv";
import path from "path";
// Load environment variables from .env file
dotenv.config({
  path: path.join(process.cwd(), ".env"),
});

// Configuration object
const config = {
  connection_string: process.env.CONNECTIONSTRING as string,
  port: process.env.PORT,
};

export default config;
