import { Get, Patch, Post, Delete, Put } from "@mayajs/common";
import { Request, Response, NextFunction } from "express";
import { Controller } from "@mayajs/core";
import { LoginServices } from "./login.service";


@Controller({
  model: "./login.model",
  route: "/login",
})
export class LoginController {
  constructor(private services: LoginServices) {}
  
  @Post({ path: "/", middlewares: [] })
  root(req: Request, res: Response, next: NextFunction): void {
    const result = this.services.login(req.body);
    res.send(result);
  }
}