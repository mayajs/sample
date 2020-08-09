import { App } from "@mayajs/core";
import Sql from "./databases/sql";
import { routes } from "./app.routing.module";

@App({
  cors: true,
  logs: "dev",
  databases: [Sql], // Add databases here
  routes,
})
export class AppModule {}
