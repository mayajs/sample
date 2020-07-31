import { Component, OnInit } from "@angular/core";
import { DatabaseService } from "../../services/database/database.service";

interface ITodo {
  _id: string;
  title: string;
  completed: boolean;
}

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"],
})
export class TodoComponent implements OnInit {
  todoList: ITodo[] = [];
  isEdit = false;
  title = "";
  id = "";
  selectedTodo: ITodo = { _id: "", title: "", completed: false };

  constructor(private db: DatabaseService) {}

  ngOnInit(): void {
    this.getTodo();
  }

  getTodo(): void {
    this.db.get("todos").subscribe((data: ITodo[]) => {
      this.todoList = data.map((todo: ITodo) => todo);
    });
  }

  addTodo(): void {
    this.db.post("todos", { title: this.title, completed: false }).subscribe((data: ITodo) => {
      this.getTodo();
      this.title = "";
    });
  }

  editTodo(todo: ITodo): void {
    this.db.get(`todos/${todo._id}`).subscribe((data: ITodo[]) => {
      const { title, _id: id } = data[0];
      this.title = title;
      this.id = id;
      this.isEdit = true;
      this.selectedTodo = data[0];
    });
  }

  patchTodo(id: string, check: boolean = false): void {
    this.db.patch(`todos/${id}`, { title: this.title, completed: check }).subscribe((data: ITodo) => {
      this.title = "";
      this.isEdit = false;
      this.getTodo();
    });
  }

  deleteTodo(id: string): void {
    this.db.delete(`todos/${id}`).subscribe((data: ITodo) => {
      this.getTodo();
    });
  }

  onChange(todo: ITodo, values: any): void {
    const check = values.currentTarget.checked;
    this.title = todo.title;
    this.patchTodo(todo._id, check);
  }
}
