<p align="center"><img src="https://github.com/mayajs/maya/blob/master/maya.svg"></p>
<h1 align="center">Sample Project</h1>

## Description

A sample Mayajs project for beginners. This contains the necessary files for yout to start using Mayajs. This is built on top of Express using Typescript to take advantage of strongly type checking and modern Javascript features. Typescript also provides easy implementation Dependency Injection and Inversion of Control (IOC) that makes unit testing much easier.

## Features
#### index.ts

> Root file of the server. Acts as a bootstrapper for all the routes and models. Accepts `AppModule` that contains all the settings for the server. This also start the server on the defined port number. If there are no port number define it will run on port `3333`.

#### app.module.ts

> This is where you define all the necessary settings for your server. This will also configure your routes and middleware on runtime. Middlewares that are define on the configRoutes function will be applied on all controllers defined in the controllers array.

#### controller.ts

> Handles all the request. You can define specific middleware or validation here using the METHOD DECORATOR functions. Method decorators are special functions that inject informationt to declaritively specify what type of route is being decorated.

#### model.ts

> This is a moongoose model that the controller will use to mapped the data to be save or modified from a database.

## Code Example

#### index.ts

```javascript
import { AppModule } from "./app.module";
import { MayaJS } from "@mayajs/core";

const server = new MayaJS(AppModule);
const prod = process.env.NODE_ENV === "production";
server.prodMode(prod).start();
```

#### app.module.ts

```javascript
import { App } from "@mayajs/core";
import { Mongo } from "@mayajs/mongo";
import { routes } from "./app.routing.module";
import { config } from "dotenv";
config();

@App({
  cors: true, // Default false
  logs: process.env.NODE_ENV, // Default false
  database: Mongo({
    connectionString: process.env.MONGO_CONNECTION_URL || "your-connection-string-here",
    options: { useCreateIndex: true, useNewUrlParser: true, useFindAndModify: false },
  }),
  port: Number(process.env.PORT), // Default port:3333
  routes,
})
export class AppModule {}
```

#### app.routing.module

```javascript
import { SampleController } from "./controllers/sample/sample.controller";

export const routes = [
  {
    controllers: [SampleController],
    middlewares: [],
    path: "",
  },
];
```

#### controller.ts

```javascript
import { Controller, Delete, Get, Patch, Post, Put } from "@mayajs/core";
import { Request, Response, NextFunction } from "express";
import { SampleServices } from "./sample.service";

@Controller({
  model: "./sample.model",
  route: "/sample",
})
export class SampleController {
  // Inject SampleServices
  constructor(private services: SampleServices) {}

  // This is a GET request equal to "/sample"
  @Get({ path: "/", middlewares: [] })
  get(req: Request, res: Response, next: NextFunction): void {
    // Use a function on SampleService
    this.services.getSamples();

    // Do some GET stuff here
    res.send("This is a GET request");
  }

  // This is a GET request equal to "/sample/:id"
  @Get({ path: "/:id", middlewares: [] })
  getId(req: Request, res: Response, next: NextFunction): void {
    // Do some GET stuff here
    res.send("This is a GET with id request");
  }

  // This is a POST request equal to "/sample/:id/:name"
  @Post({ path: "/:id/:name", middlewares: [] })
  post(req: Request, res: Response, next: NextFunction): void {
    // Do some POST stuff here
    res.send("This is a POST request");
  }

  // This is a PATCH request equal to "/sample/:id/custom-path"
  @Patch({ path: "/:id/custom-path", middlewares: [] })
  patch(req: Request, res: Response, next: NextFunction): void {
    // Do some PATCH stuff here
    res.send("This is a PATCH request");
  }

  // This is a PUT request equal to "/sample/:id"
  @Put({ path: "/:id", middlewares: [] })
  put(req: Request, res: Response, next: NextFunction): void {
    // Do some PUT stuff here
    res.send("This is a PUT request");
  }

  // This is a DELETE request equal to "/sample/:id"
  @Delete({ path: "/:id", middlewares: [] })
  delete(req: Request, res: Response, next: NextFunction): void {
    // Do some DELETE stuff here
    res.send("This is a DELETE request");
  }
}

```

#### sample.model.ts

```javascript
import { Schema, model } from "mongoose";
import paginate from "mongoose-paginate";

const schema = new Schema({
  name: {
    required: [true, "Name is required."],
    type: String,
    unique: true,
  },
});

schema.plugin(paginate);

export default model("Sample", schema);
```

> **NOTE: sample.model.ts** must be on the same folder of the **controller.ts** that is referencing it.
> **sample.model.ts** must be exported as **default** too.

#### sample.service.ts

```javascript
import { Injectable } from "@mayajs/core";
import { Models } from "@mayajs/mongo";

@Injectable() // This decorator allows this class to be injected on other modules
export class SampleServices {
  @Models("sample") model: any; // Create an instance of `sample` model
  
  getSamples() {
    // Your business logic here
  }
}
```

> **NOTE: Services** must have an **Injectable Decorator** for it to be used on any controller or other services.

## Dependency

- Open command line terminal ( cmd or shell).
- Run `npm i` to install all dependency.

## Run server

- Open command line terminal ( cmd or shell).
- Run `npm start` to install all dependency.
