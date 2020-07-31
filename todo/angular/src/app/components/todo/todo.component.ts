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
}
