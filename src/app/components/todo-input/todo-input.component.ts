import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Todo} from "../../models/todo";

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  todoName: string = '';
  todoValue: string = '';

  @Output() onAddTodo = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit(): void {
  }


  addTodo(): void {

    const newTodo = {name: this.todoName, todo: this.todoValue};
    this.onAddTodo.emit(newTodo);

  }
}
