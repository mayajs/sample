import { Get, Patch, Post, Delete, Put } from "@mayajs/common";
import { Request, Response, NextFunction } from "express";
import { Controller } from "@mayajs/core";
import { UserServices } from "./user.service";

@Controller({
  model: "./user.model",
  route: "/user",
})
export class UserController {
  constructor(private services: UserServices) {}

  @Get({ path: "/", middlewares: [] })
  root(req: Request, res: Response, next: NextFunction): void {
    res.send(this.services.hello());
  }

  @Post({ path: "/", middlewares: [] })
  async addUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.send(await this.services.create(req.body));
  }
}
