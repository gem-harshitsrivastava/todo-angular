import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string="";
  desc:string="";
  @Output() todoAdd:EventEmitter<Todo>=new EventEmitter();
  ngOnInit(): void {
  }
  // onSubmit(){
  //   const todo={
  //     sno:8,
  //     title:this.title,
  //     desc:this.desc,
  //     active:true
  //   }
  //   console.log("--"+todo);
  //   this.todoAdd.emit(todo);
  // }
 
  
}
