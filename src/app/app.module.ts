import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { HomeComponent } from './components/home/home.component';
import { SubjectComponent } from './components/subject/subject.component';
import { ExamComponent } from './components/exam/exam.component';
import { ChangeBgDirective } from './directives/change-bg.directive';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    
    NaviComponent,
         LessonComponent,
         HomeComponent,
         SubjectComponent,
         ExamComponent,
         ChangeBgDirective,
         LoginComponent
         
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
