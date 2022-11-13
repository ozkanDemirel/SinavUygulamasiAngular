import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonsModule } from './lessons/lessons.module';
import { SubjectsModule } from './subjects/subjects.module';
import { ExamsModule } from './exams/exams.module';
import { HomeModule } from './home/home.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LessonsModule,
    SubjectsModule,
    ExamsModule,
    HomeModule
  ]
})
export class ComponentsModule { }
