import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewNotesComponent } from './new-notes/new-notes.component';
import { ViewNotesComponent } from './view-notes/view-notes.component';
const routes:Routes=[
  {
    path:"new-notes",
    component:NewNotesComponent
  },
  {
    path:"view-notes",
    component:ViewNotesComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
