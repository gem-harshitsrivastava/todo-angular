import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  todo : Todo = new Todo
  title:string="";
  desc:string="";
  @Output() todoAdd:EventEmitter<Todo>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log("poiuyt")
    const todo={
      sno:8,
      title:this.title,
      desc:this.desc,
      active:true
    };
    console.log("iuyt"+todo)
    // console.log("--"+todo);
    this.todoAdd.emit(todo);
    console.log("iuyt"+todo)
  }
  
}
