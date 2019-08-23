import { App } from "@mayajs/core";
import { Mongo } from "@mayajs/mongo";
import { routes } from "./app.routing.module";

@App({
  cors: true, // Default false
  logs: process.env.NODE_ENV, // Default false
  database: Mongo({
    connectionString: "your-connection-string-here",
    options: { useCreateIndex: true, useNewUrlParser: true, useFindAndModify: false },
  }),
  port: Number(process.env.PORT), // Default port:3333
  routes,
})
export class AppModule {}
