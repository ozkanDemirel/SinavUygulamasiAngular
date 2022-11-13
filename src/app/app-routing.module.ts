import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { ExamComponent } from './components/exam/exam.component';
import { HomeComponent } from './ui/components/home/home.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { LoginComponent } from './components/login/login.component';
import { SubjectComponent } from './components/subject/subject.component';
import { ExamsComponent } from './ui/components/exams/exams.component';

const routes: Routes = [
  /* {path:"exams/subjects/:subjectId", component:ExamComponent},
  {path:"subjects/lessons/:lessonId", component:SubjectComponent},
  {path:"home",component:HomeComponent},
  {path:"lesson",component:LessonComponent},
  {path:"admin-panel",component:AdminPanelComponent},
  {path:"login",component:LoginComponent},
  {path:"admin-content",component:AdminContentComponent},
  {path:"**", redirectTo:"home", pathMatch:"full"}*/

  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      {
        path: 'exams',
        loadChildren: () =>
          import('./admin/components/exams/exams.module').then(
            (module) => module.ExamsModule
          ),
      },
      {
        path: 'lessons',
        loadChildren: () =>
          import('./admin/components/lessons/lessons.module').then(
            (module) => module.LessonsModule
          ),
      },
      {
        path: 'subjects',
        loadChildren: () =>
          import('./admin/components/subjects/subjects.module').then(
            (module) => module.SubjectsModule
          ),
      },
    ],
  },
  { path: '', component: HomeComponent },
  {
    path: 'exams',
    loadChildren: () =>
      import('./ui/components/exams/exams.module').then(
        (module) => module.ExamsModule
      ),
  },
  {
    path: 'lessons',
    loadChildren: () =>
      import('./ui/components/lessons/lessons.module').then(
        (module) => module.LessonsModule
      ),
  },
  {
    path: 'subjects',
    loadChildren: () =>
      import('./ui/components/subjects/subjects.module').then(
        (module) => module.SubjectsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
