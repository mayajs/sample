import { Mongo } from "@mayajs/mongo";
import sample from "../controllers/login/login.model";

export = Mongo({
  name: "your-db-name-here",
  connectionString: "your-connection-string-here",
  schemas: [
    sample, // Add Mongoose Schema here
  ],
});