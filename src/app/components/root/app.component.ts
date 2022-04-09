import { Component } from '@angular/core';
import {Todo} from "../../models/todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoList: Array<Todo> = [
    {name: 'Luca', todo: 'blablabla'},
    {name: 'Mehdi', todo: 'blublublu'}
  ];
  addTodo(todo: Todo): void {
    this.todoList.push(todo);
  }
}
