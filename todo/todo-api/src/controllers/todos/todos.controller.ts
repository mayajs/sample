import { Get, Patch, Post, Delete, Put } from "@mayajs/common";
import { Request, Response, NextFunction } from "express";
import { Controller } from "@mayajs/core";
import { TodosServices } from "./todos.service";

@Controller({
  model: "./todos.model",
  route: "/todos",
})
export class TodosController {
  constructor(private services: TodosServices) {}

  @Post({ path: "/" })
  async addbyId(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.json(await this.services.addUser(req.body));
  }

  @Get({ path: "/" })
  async getAllUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.json(await this.services.allUser());
  }

  @Get({ path: "/:id" })
  async getUserbyId(req: Request, res: Response, next: NextFunction): Promise<void> {
    const id = req.params.id;
    res.json(await this.services.userbyId(id));
  }

  @Patch({ path: "/:id" })
  async updateUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    const id = req.params.id;
    res.json(await this.services.updateUser(id, req.body));
  }

  @Delete({ path: "/:id" })
  async deleteUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    const id = req.params.id;
    res.json(await this.services.deleteUser(id));
  }
}
