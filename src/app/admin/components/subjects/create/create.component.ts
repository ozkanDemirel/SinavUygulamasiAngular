import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base/base.component';
import { CreateSubject } from 'src/app/contracts/create-subject';
import { ListLesson } from 'src/app/contracts/list-lesson';
import { ListSubject } from 'src/app/contracts/list-subject';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { LessonService } from 'src/app/services/common/models/lesson.service';
import { SubjectService } from 'src/app/services/common/models/subject.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent extends BaseComponent implements OnInit {

  lessons:any[]=[]
  currentLesson:any;
  subjects:any[]=[]
  lessonId:number;
  constructor(
    spinner:NgxSpinnerService,  
    private subjectService:SubjectService, 
    private lessonService: LessonService,
    private alertifyService:AlertifyService) {
    super(spinner)
   }

  ngOnInit(): void {
    this.getLessons();
  }

  getLessonId(lessonId:number){
    this.lessonId=lessonId;
  }
  create( subjectName:HTMLInputElement){
    

    this.showSpinner(SpinnerType.BallAtom);

    const createSubject:CreateSubject = new CreateSubject();

    
    createSubject.subjectName=subjectName.value;
    createSubject.lessonId=this.lessonId

    this.subjectService.create(createSubject, ()=>{
      this.hideSpinner(SpinnerType.BallAtom);
      this.alertifyService.message(
      "Konu Ekleme Başarılı",
      {
        dismissOther:true,
        messageType:MessageType.Success,
        position:Position.BottomRight
      });
    }, errorMessage => {
      this.alertifyService.message(errorMessage,
        {
          dismissOther: true,
          messageType: MessageType.Error,
          position: Position.TopRight
        });
    });
  }

  getLessons(){
    this.lessonService.getLessons().subscribe(response=>{
      this.lessons=response.data
  })
  }
getSubjectsByLesson(lessonId=this.lessonId){
    this.subjectService.getSubjectsByLesson(lessonId).subscribe(response=>{
      this.subjects = response.data
    })

  }

  setCurrentLesson(lesson:ListLesson){
    this.currentLesson = lesson;
  }
  getCurrentLessonClass(lesson:ListLesson){
    if(lesson ==this.currentLesson){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
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
