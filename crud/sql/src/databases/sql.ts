import { Sql } from "@mayajs/sql";
import sample from "../controllers/user/user.model";

export = Sql({
  name: "your-database-name",
  options: {
    database: "root",
    username: "root",
    password: "",
    options: {
      host: "localhost",
      dialect: "mysql",
    },
  },
  schemas: [
    sample, // Add Sql Schema here
  ],
});
