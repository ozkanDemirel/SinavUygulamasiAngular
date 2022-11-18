import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent } from 'src/app/base/base/base.component';
import { ListLesson } from 'src/app/contracts/list-lesson';
import { ListSubject } from 'src/app/contracts/list-subject';
import { AlertifyService } from 'src/app/services/admin/alertify.service';
import { LessonService } from 'src/app/services/common/models/lesson.service';
import { SubjectService } from 'src/app/services/common/models/subject.service';


declare var $:any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent extends BaseComponent implements OnInit {
 
  displayedColumns: string[] = ['subjectId','lessonId','subjectName','edit','delete'];
  dataSource:MatTableDataSource<ListSubject>=null;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  lessons:any[]=[]
  currentLesson:any;
  subjects:any[]=[];

  constructor(
    spinner:NgxSpinnerService ,
    private subjectService:SubjectService,  
    private alertifyService: AlertifyService,
    private activatedRoute:ActivatedRoute,
    private lessonService:LessonService) {
    super(spinner)
   }
  

  async ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      
      this.getSubjectsByLesson(params["lessonId"]);
    
  }),
  this.getSubjects()
 this.getLessons()
    
  }

  getSubjects(){
    this.subjectService.getSubjects().subscribe(response=>{
      this.subjects=response.data
  })
  }
  getLessons(){
    this.lessonService.getLessons().subscribe(response =>{
      this.lessons=response.data
    })
  }

  getSubjectsByLesson(lessonId:number){
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
