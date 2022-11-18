import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base/base.component';
import { CreateLesson } from 'src/app/contracts/create-lesson';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { LessonService } from 'src/app/services/common/models/lesson.service';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent extends BaseComponent implements OnInit {

  lessons:any[]=[]

  constructor(
    spinner:NgxSpinnerService, 
    private lessonService:LessonService, 
    private alertifyService:AlertifyService) {
    super(spinner)
   }

  ngOnInit(): void {
    
  }

  create(lessonCode:HTMLInputElement, lessonName:HTMLInputElement){

    this.showSpinner(SpinnerType.BallAtom);

    const createLesson:CreateLesson = new CreateLesson();

    createLesson.lessonCode=lessonCode.value;
    createLesson.lessonName=lessonName.value;
    
    this.lessonService.create(createLesson, ()=>{
      this.hideSpinner(SpinnerType.BallAtom);
      this.alertifyService.message(
      "Ders Ekleme Başarılı",
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
    }
    
    );
  }
  
}

