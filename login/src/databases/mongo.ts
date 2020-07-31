import { Mongo } from "@mayajs/mongo";
import sample from "../controllers/login/login.model";
import env from "../environments";

export = Mongo({
  name: "your-db-name-here",
  connectionString: env.MONGO_URL,
  schemas: [
    sample, // Add Mongoose Schema here
  ],
});