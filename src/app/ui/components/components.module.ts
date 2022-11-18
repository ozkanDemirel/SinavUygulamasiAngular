import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonsModule } from './lessons/lessons.module';
import { SubjectsModule } from './subjects/subjects.module';
import { ExamsModule } from './exams/exams.module';
import { HomeModule } from './home/home.module';
import { NavbarModule } from './navBar/navbar.module';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LessonsModule,
    SubjectsModule,
    ExamsModule,
    HomeModule,
    RegisterModule,
    LoginModule,
    UserModule,
    ProfileModule,
    
    
    
  ]
})
export class ComponentsModule { }
