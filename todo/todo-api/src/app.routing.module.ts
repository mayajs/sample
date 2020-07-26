import { TodosController } from "./controllers/todos/todos.controller";

export const routes = [
  {
    controllers: [TodosController],
    middlewares: [],
    path: "",
  },
];
