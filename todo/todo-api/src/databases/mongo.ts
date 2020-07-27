import { Mongo } from "@mayajs/mongo";
import todos from "../controllers/todos/todos.model";

export = Mongo({
  name: "your-db-name",
  connectionString: "your-connection-string",
  schemas: [
    todos, // Add Mongoose Schema here
  ],
});
