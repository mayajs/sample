import { config } from "dotenv";
config();

export = {
  production: false,
  MONGO_URL: process.env.MONGO_URL || "",
};
