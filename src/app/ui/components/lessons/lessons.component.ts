import { Component, OnInit } from '@angular/core';
import { ListLesson } from 'src/app/contracts/list-lesson';
import { LessonService } from 'src/app/services/common/models/lesson.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  lessons:ListLesson[]=[]
  currentLesson :ListLesson;

  constructor(private lessonService:LessonService) { }

  ngOnInit(): void {
    this.getLessons()
  }

  getLessons(){
    this.lessonService.getLessons().subscribe(response=>{
        this.lessons=response.data
    })
}
getCurrentLessonClass(lesson:ListLesson){
  if(lesson ==this.currentLesson){
    return "list-group-item active"
  }else{
    return "list-group-item"
  }
}

setCurrentLesson(lesson:ListLesson){
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