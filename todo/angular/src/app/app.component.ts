import { Component, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  todoList = [];
  todo = "";

  addTodo(): void {
    this.todoList.push(this.todo);
    console.log(this.todoList);
  }
}
