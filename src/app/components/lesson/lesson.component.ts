import { Component, OnInit } from '@angular/core';
import { Lesson } from 'src/app/models/lesson';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  lessons:Lesson[]=[]
  currentLesson :Lesson;

  constructor(private lessonService:LessonService) { }

  ngOnInit(): void {
    this.getLessons()
  }

  getLessons(){
    this.lessonService.getLessons().subscribe(response=>{
        this.lessons=response.data
    })
  }

 

  
  getCurrentLessonClass(lesson:Lesson){
    if(lesson ==this.currentLesson){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

  setCurrentLesson(lesson:Lesson){
    this.currentLesson = lesson;
  }

  getAllLessonClass(){
    if(!this.currentLesson){
     return "list-group-item active"
    }
    else{
     return "list-group-item"
    }
}

}
