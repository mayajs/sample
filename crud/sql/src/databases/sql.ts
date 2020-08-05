import { Sql } from "@mayajs/sql";
import sample from "../controllers/user/user.model";

export = Sql({
  name: "sample",
  options: {
    database: "test",
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
