import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../../models/todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todoList: Array<Todo> = [];

  constructor() { }

  ngOnInit(): void {
  }



}
