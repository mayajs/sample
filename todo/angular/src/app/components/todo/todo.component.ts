import { Component, OnInit } from "@angular/core";
import { DatabaseService } from "../../services/database/database.service";
import { Subscriber } from "rxjs";
import { AppComponent } from "src/app/app.component";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"],
})
export class TodoComponent implements OnInit {
  todoList = [];
  isEdit = false;
  title = "";
  id = "";
  completed = false;

  constructor(private db: DatabaseService) {}

  ngOnInit(): void {
    this.getTodo();
  }

  getTodo(): void {
    this.db.get("todos").subscribe((data: any) => {
      this.todoList = data.map((todo: any) => todo);
    });
  }

  addTodo(): void {
    this.db.post("todos", { title: this.title, completed: false }).subscribe((data: any) => {
      this.getTodo();
      this.title = "";
    });
  }

  editTodo(todo: any): void {
    this.db.get(`todos/${todo._id}`).subscribe((data: any) => {
      const { title, _id: id } = data[0];
      this.title = title;
      this.id = id;
      this.isEdit = true;
    });
  }

  patchTodo(id: string, check: boolean = false): void {
    this.db.patch(`todos/${id}`, { title: this.title, completed: check }).subscribe((data: any) => {
      this.title = "";
      this.isEdit = false;
      this.getTodo();
    });
  }

  deleteTodo(id: string): void {
    this.db.delete(`todos/${id}`).subscribe((data: any) => {
      this.getTodo();
    });
  }

  onChange(todo: any, values: any): void {
    const check = values.currentTarget.checked;
    this.title = todo.title;
    this.patchTodo(todo._id, check);
  }
}
