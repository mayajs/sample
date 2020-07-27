import { Get, Patch, Post, Delete, Put } from "@mayajs/common";
import { Request, Response, NextFunction } from "express";
import { Controller } from "@mayajs/core";
import { SampleServices } from "./sample.service"


@Controller({
  model: "./sample.model",
  route: "/sample",
})
export class SampleController {
  constructor(private services: SampleServices) {}
  
  @Get({ path: "/", middlewares: [] })
  root(req: Request, res: Response, next: NextFunction): void {
    res.send(this.services.hello());
  }
}