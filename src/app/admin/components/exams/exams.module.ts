import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamsComponent } from './exams.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ExamsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:ExamsComponent}
    ])
  ]
})
export class ExamsModule { }
