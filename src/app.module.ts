import { SampleController } from "./controllers/sample/sample.controllers";
import { App } from "@mayajs/core";

@App({
  routes: [
    {
      controllers: [SampleController],
      middlewares: [],
      path: "",
    },
  ],
})
export class AppModule {}
