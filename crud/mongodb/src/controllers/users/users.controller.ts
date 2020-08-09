import { Get, Patch, Post, Delete, Put } from "@mayajs/common";
import { Request, Response, NextFunction } from "express";
import { Controller } from "@mayajs/core";
import { UsersServices } from "./users.service";


@Controller({
  model: "./users.model",
  route: "/users",
})
export class UsersController {
  constructor(private services: UsersServices)  {}

  @Post({ path: "/" })
  async add(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.json(await this.services.add(req.body));
  }

  @Get({ path: "/" })
  async get(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.json(await this.services.get());
  }

  @Get({ path: "/:id" })
  async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
    const id = req.params.id;
    res.json(await this.services.getById(id));
  }

  @Patch({ path: "/:id" })
  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    const id = req.params.id;
    res.json(await this.services.update(id, req.body));
  }

  @Delete({ path: "/:id" })
  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    const id = req.params.id;
    res.json(await this.services.delete(id));
  }
  
}