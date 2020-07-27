import { AppModule } from "./app.module";
import { MayaJS } from "@mayajs/core";

const server = new MayaJS(AppModule);
const prod = process.env.NODE_ENV === "production";
server.prodMode(prod).start(3333);