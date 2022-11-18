import { ArrayDataSource } from '@angular/cdk/collections';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ListLesson } from 'src/app/contracts/list-lesson';
import { LessonService } from 'src/app/services/common/models/lesson.service';



@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
  dataSource:MatTableDataSource<ListLesson>=null;
  lessons:any[]=[]
  lesson:ListLesson;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ListLesson,
    private lessonService:LessonService,
    private activatedRoute:ActivatedRoute ) {}

  ngOnInit(): void {
    //this.getLesson();
    
    this.getByLessonId();
  
  }
 /*getLesson(){
    this.lessonService.getLessons().subscribe(response=>{
      this.lessons=response.data
  })
  }*/

  getByLessonId(){
   let id:number=this.lesson.getlessonId()
  
    this.lessonService.getByLessonId(id).subscribe(response=>{
      this.lessons=response.data;

    })
  }
  update(txtLessonCode, txtLessonName){}
  
}


