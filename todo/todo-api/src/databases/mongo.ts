import { Mongo } from "@mayajs/mongo";
import todos from "../controllers/todos/todos.model";
import env from "../environments";

export = Mongo({
  name: "your-db-name-here",
  connectionString: env.MONGO_URL,
  schemas: [
    todos, // Add Mongoose Schema here
  ],
});
