import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamsComponent } from './exams.component';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';



@NgModule({
  declarations: [
    ExamsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"", component:ExamsComponent}
    ]),
    MatListModule,
    MatRadioModule
  ]
})
export class ExamsModule { }
