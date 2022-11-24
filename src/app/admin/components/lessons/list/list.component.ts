import {  Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {  NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base/base.component';
import { ListLesson } from 'src/app/contracts/list-lesson';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { LessonService } from 'src/app/services/common/models/lesson.service';
import { UpdateComponent } from '../update/update.component';


declare var $:any;


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent extends BaseComponent implements OnInit {
 
  displayedColumns: string[] = ['lessonCode', 'lessonName','edit','delete'];
  dataSource:MatTableDataSource<ListLesson>=null;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  lessons:any[]=[]
  lesson:ListLesson;
  currentLesson:any
  //lessonId:number

  constructor(
    spinner:NgxSpinnerService ,
    private lessonService:LessonService, 
    private alertifyService: AlertifyService,
    public dialog: MatDialog) {
    super(spinner)
   }
  

  async ngOnInit() {
   this.getLesson();
  }


 /* async getLessons(){

    this.showSpinner(SpinnerType.BallAtom);
    const allLessons:{ totalLessonCount: number; lessons: ListLesson[] } = await this.lessonService.
    read(this.paginator ? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5, 
      ()=>this.hideSpinner(SpinnerType.BallAtom), errorMessage =>
    this.alertifyService.message(errorMessage,{
      dismissOther : true,
      messageType : MessageType.Error,
      position:Position.BottomRight 

    }))
    this.dataSource = new MatTableDataSource<ListLesson>(allLessons.lessons);
    this.paginator.length = allLessons.totalLessonCount;
    this.dataSource.paginator = this.paginator;

  }

  async pageChanged(){
    await this.getLessons();
  }*/

  getLesson(){
    this.lessonService.getLessons().subscribe(response=>{
      this.lessons=response.data
  })
  }

  setLessonId(lessonId:number){
   const lesson:ListLesson  = new ListLesson();
   lesson.lessonId=lessonId;
    
  }

  openDialog() {
    this.dialog.open(UpdateComponent);
  }

}
