import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todo:Todo[];
  title:string="";
  desc:string="";
  @Input() todoAdd:EventEmitter<Todo>=new EventEmitter();
  constructor() {
    this.todo=[
      {
        sno:3,
        title:"this title",
        desc:"this desc",
        active:true
      },
      {
        sno:4,
        title:"this title2",
        desc:"this desc2",
        active:true
      }
    ]
   }

  ngOnInit(): void {
  }
  deleteTodo(todo:Todo){
    const index=this.todo.indexOf(todo);
    this.todo.splice(index,1);
  }

  addTodo(todo:Todo){
  const index=this.todo.indexOf(todo);
  this.todo.push(todo)
 }
}
