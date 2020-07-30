import { Mongo } from "@mayajs/mongo";
import users from "../controllers/users/users.model";

export = Mongo({
  name: "test",
  connectionString: "mongodb+srv://muriusbane:root@cluster0.7ispv.mongodb.net/test?retryWrites=true&w=majority",
  schemas: [
    users, 
  ],
});