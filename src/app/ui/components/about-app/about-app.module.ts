import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutAppComponent } from './about-app.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AboutAppComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"", component:AboutAppComponent}
    ])
  ]
})
export class AboutAppModule { }
