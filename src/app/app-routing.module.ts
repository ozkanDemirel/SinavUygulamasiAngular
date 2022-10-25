import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { ExamComponent } from './components/exam/exam.component';
import { HomeComponent } from './components/home/home.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { LoginComponent } from './components/login/login.component';
import { SubjectComponent } from './components/subject/subject.component';



const routes: Routes = [
  
  {path:"exams/subjects/:subjectId", component:ExamComponent},
  {path:"subjects/lessons/:lessonId", component:SubjectComponent},
  {path:"home",component:HomeComponent},
  {path:"lesson",component:LessonComponent},
  {path:"**", redirectTo:"home", pathMatch:"full"},
  {path:"login",component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
