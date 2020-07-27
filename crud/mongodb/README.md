# Mongo MayaJS Project

This project was created with [MayaJS CLI](https://github.com/mayajs/cli) version 0.3.7.

## Getting Started

- Install Nodejs, donwload it [here](https://nodejs.org/dist/v12.18.2/node-v12.18.2-x64.msi).
> Note: If you already have NodeJS installed skip this step.

- Install MayajJS using this command
  - `npm i @mayajs/cli -g` or for linux/mac users `sudo npm i @mayajs/cli -g`
> Note: If you already have MayajJS installed skip this step.

- Navigate to your project folder

> If you are cloning this project for the first time you need to install all the dependencies first before running this project otherwise skip this.
- Install dependencies using this command
  - `npm i`

## Development Server

Run `maya serve` or `maya s` to run the server. Navigate to `http://localhost:3333`. Hot reload will watch for file changes and restart the server.

## Code scaffolding

Run `maya create <service | controller | model > < name | directory >` to create a new component.

## Build

Run `maya build` or `maya b` to build the project. Use the `--prod` flag for a production build. The build files will be created in the `dist/` directory.