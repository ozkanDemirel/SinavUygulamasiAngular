import { ArrayDataSource } from '@angular/cdk/collections';
import { Component, HostListener, Inject, Input, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base/base.component';
import { CreateLesson } from 'src/app/contracts/create-lesson';
import { ListLesson } from 'src/app/contracts/list-lesson';
import { UpdateLesson } from 'src/app/contracts/update-lesson';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { LessonService } from 'src/app/services/common/models/lesson.service';



@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent extends BaseComponent implements OnInit {
  
  dataSource:MatTableDataSource<ListLesson>=null;
  lessons:ListLesson[]=[]
  lesson:ListLesson;
  currentLesson:any
  lessonId:number
  id:any

  constructor(
    spinner:NgxSpinnerService, 
    @Inject(MAT_DIALOG_DATA) public data: ListLesson,
    private lessonService:LessonService,
    private activatedRoute:ActivatedRoute,
    private alertifyService:AlertifyService ) {
      super(spinner)
    }

  ngOnInit(): void {
    console.warn(this.activatedRoute.snapshot.params.id)
    
    this.getLesson();
 /* this.activatedRoute.params.subscribe(params=>{
      
      this.getByLessonId(params["lessonId"]);
    
  })*/
 // this.getByLessonId()
  
 /* this.lessonService.getByLessonId(this.activatedRoute.snapshot.params.lessonId ).subscribe(response=>{
    this.lessons=response.data;
  })*/
  }
 getLesson(){
    this.lessonService.getLessons().subscribe(response=>{
      this.lessons=response.data
  })
  }
  
  setCurrentLesson(lesson:ListLesson){
    this.currentLesson = lesson;
  }
  getLessonId(lessonId:number){
    this.lessonId=lessonId;
    
   }
  getByLessonId(){

   
    
    this.lessonService.getByLessonId(this.lessonId).subscribe(response=>{
      this.lessons=response.data;
      
    }
    
    )
    
  }
 

  update(lessonCode:HTMLInputElement, lessonName:HTMLInputElement){

    this.showSpinner(SpinnerType.BallAtom);

    const updateLesson:UpdateLesson = new UpdateLesson();
    //updateLesson.lessonId=this.lessonId;
    updateLesson.lessonCode=lessonCode.value;
    updateLesson.lessonName=lessonName.value;
    
    try {
      this.lessonService.update(this.lessonId,updateLesson);
      
     // this.hideSpinner(SpinnerType.BallAtom);
      this.alertifyService.message(
      "Güncelleme Başarılı",{
        dismissOther:true,
        messageType:MessageType.Success,
        position:Position.BottomRight
      });
    } catch (errorMessage) {
      this.alertifyService.message(errorMessage,
        {
          dismissOther: true,
          messageType: MessageType.Error,
          position: Position.TopRight
        });
    }
    
      /* ()=>{
      this.hideSpinner(SpinnerType.BallAtom);
      this.alertifyService.message(
      "Güncelleme Başarılı",
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
    
    );*/
  }
  
  }
  



