import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateComponent } from './update.component';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    UpdateComponent
  ],
  imports: [
    CommonModule,
   RouterModule.forChild([
      {path:"",component:UpdateComponent}
    ]),
    MatInputModule,
    MatButtonModule,
    MatTableModule,
     
    
  ]
})
export class UpdateModule { }
