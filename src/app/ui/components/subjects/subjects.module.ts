import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsComponent } from './subjects.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SubjectsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"", component:SubjectsComponent}
    ])
  ]
})
export class SubjectsModule { }
