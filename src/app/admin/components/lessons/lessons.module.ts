import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonsComponent } from './lessons.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LessonsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:LessonsComponent}
    ])
  ]
})
export class LessonsModule { }
