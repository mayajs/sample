import { Mongo } from "@mayajs/mongo";
import users from "../controllers/users/users.model";

export = Mongo({
  name: "your-db-name-here",
  connectionString: "your-connection-string-here",
  schemas: [
    users, // Add Mongoose Schema here
  ],
});
