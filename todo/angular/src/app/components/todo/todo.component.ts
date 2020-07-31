import { Component, OnInit, Input } from "@angular/core";
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
  todo = "";
  id = "";

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
    this.db.post("todos", { title: this.todo, completed: false }).subscribe((data: any) => {
      this.getTodo();
      this.todo = "";
    });
  }

  editTodo(todo: any): void {
    this.db.get(`todos/${todo._id}`).subscribe((data: any) => {
      const { title, _id: id } = data[0];
      this.todo = title;
      this.id = id;
      this.isEdit = true;
    });
  }

  patchTodo(id: string): void {
    this.db.patch(`todos/${id}`, { title: this.todo, completed: false }).subscribe((data: any) => {
      this.todo = "";
      this.isEdit = false;
      this.getTodo();
    });
  }

  deleteTodo(id: string): void {
    this.db.delete(`todos/${id}`).subscribe((data: any) => {
      this.getTodo();
    });
  }
}
