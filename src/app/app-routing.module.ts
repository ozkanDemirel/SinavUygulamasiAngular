import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { LessonsComponent } from './admin/components/lessons/lessons.component';
import { LessonsModule } from './admin/components/lessons/lessons.module';
import { LayoutComponent } from './admin/layout/layout.component';
import { HomeComponent } from './ui/components/home/home.component';


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
        component:LessonsComponent,
        children:[
         
          {
            path:'update',
            loadChildren: () =>
            import('./admin/components/lessons/update/update.module').then(
              (module) => module.UpdateModule,
            )
            },

        ]
        /*loadChildren: () =>
          import('./admin/components/lessons/lessons.module').then(
            (module) => module.LessonsModule
          ),*/
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
  {
    path: 'register',
    loadChildren: () =>
      import('./ui/components/register/register.module').then(
        (module) => module.RegisterModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./ui/components/login/login.module').then(
        (module) => module.LoginModule
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./ui/components/user/user.module').then(
        (module) => module.UserModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./ui/components/profile/profile.module').then(
        (module) => module.ProfileModule
      ),
  },
  {
    path:"subjects/lessons/:lessonId", 
    loadChildren:() =>
      import('./ui/components/subjects/subjects.module').then(
        (module) => module.SubjectsModule
      )
  },
  {
    path:"exams/subjects/:subjectId", 
    loadChildren:() =>
    import('./ui/components/exams/exams.module').then(
      (module) => module.ExamsModule
    )
    },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
