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
  localItem:any
  @Input() todoAdd:EventEmitter<Todo>=new EventEmitter();
  constructor() {
    this.todo=[]
    this.localItem=localStorage.getItem("todos");
     if(this.localItem==null){
       this.todo=[];
     }else{
       this.todo=JSON.parse(this.localItem)
     }
   }

  ngOnInit(): void {
  }
  deleteTodo(todo:Todo){
    const index=this.todo.indexOf(todo);
    this.todo.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todo))
    console.log(localStorage);
  }

  addTodo(todo:Todo){
  const index=this.todo.indexOf(todo);
  this.todo.push(todo)
  localStorage.setItem("todos",JSON.stringify(this.todo))
  console.log(localStorage);
 }
 toggleTodo(todo:Todo){
  console.log(todo)
  const index=this.todo.indexOf(todo);
  this.todo[index].active=!this.todo[index].active
  localStorage.setItem("todos",JSON.stringify(this.todo))
  console.log(todo)
 }
}
