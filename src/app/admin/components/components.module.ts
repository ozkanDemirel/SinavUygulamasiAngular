import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonsModule } from './lessons/lessons.module';
import { SubjectsModule } from './subjects/subjects.module';
import { ExamsModule } from './exams/exams.module';
import { DashboardModule } from './dashboard/dashboard.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LessonsModule,
    SubjectsModule,
    ExamsModule,
    DashboardModule
  ]
})
export class ComponentsModule { }
