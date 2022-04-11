import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TodosComponent } from './MyComp/todos/todos.component';
import { TodoItemComponent } from './MyComp/todo-item/todo-item.component';
import { TodoAddComponent } from './MyComp/todo-add/todo-add.component';
import { RouterModule, Routes } from '@angular/router';
import { NewNotesComponent } from './new-notes/new-notes.component';
import { ViewNotesComponent } from './view-notes/view-notes.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    TodoAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
