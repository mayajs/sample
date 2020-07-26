import { Mongo } from "@mayajs/mongo";
import todos from "../controllers/todos/todos.model";

export = Mongo({
  name: "test",
  connectionString: "mongodb+srv://mayajs:!23456Q@test.u1uyv.mongodb.net/test?retryWrites=true&w=majority",
  schemas: [
    todos, // Add Mongoose Schema here
  ],
});
