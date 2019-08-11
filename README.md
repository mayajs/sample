# Mayajs-sample

## Description

A sample Mayajs project for beginners. This contains the necessary files for yout to start using Mayajs. This is built on top of Express using Typescript to take advantage of strongly type checking and modern Javascript features. Typescript also provides easy implementation Dependency Injection and Inversion of Control (IOC) that makes unit testing much easier.

## Features

- Decorators for Get, Post, Patch, Put and Delete methods
- Single class for mongoose models
- Controller and Injectable decorator for Dependency Injection
- Middleware functions for chained validation of request body

#### index.ts

> Root file of the server. Acts as a bootstrapper for all the routes and models. Accepts `AppModule` that contains all the settings for the server. This also start the server on the defined port number. If there are no port number define it will run on port `3333`.

#### app.module.ts

> This is where you define all the necessary settings for your server. This will also configure your routes and middleware on runtime. Middlewares that are define on the configRoutes function will be applied on all controllers defined in the controllers array.

#### controller.ts

> Handles all the request. You can define specific middleware or validation here using the METHOD DECORATOR functions. Method decorators are special functions that inject informationt to declaritively specify what type of route is being decorated.

#### model.ts

> This is a moongoose model that the controller will use to mapped the data to be save or modified from a database.

## Installation

- Open command line terminal ( cmd or shell).
- Run `npm i` to install all dependency.

## Run server

- Open command line terminal ( cmd or shell).
- Run `npm start` to install all dependency.
