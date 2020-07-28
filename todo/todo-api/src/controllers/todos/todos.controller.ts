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
  async addTodo(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.json(await this.services.addTodo(req.body));
  }

  @Get({ path: "/" })
  async getAllTodos(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.json(await this.services.allTodos());
  }

  @Get({ path: "/:id" })
  async getTodosbyId(req: Request, res: Response, next: NextFunction): Promise<void> {
    const id = req.params.id;
    res.json(await this.services.todobyId(id));
  }

  @Patch({ path: "/:id" })
  async updateTodo(req: Request, res: Response, next: NextFunction): Promise<void> {
    const id = req.params.id;
    res.json(await this.services.updateTodo(id, req.body));
  }

  @Delete({ path: "/:id" })
  async deleteTodo(req: Request, res: Response, next: NextFunction): Promise<void> {
    const id = req.params.id;
    res.json(await this.services.deleteTodo(id));
  }
}
