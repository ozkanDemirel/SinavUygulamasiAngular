import {  Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {  NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base/base.component';
import { ListExam } from 'src/app/contracts/list-exam';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { ExamService } from 'src/app/services/common/models/exam.service';

declare var $:any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent extends BaseComponent implements OnInit {
 
  displayedColumns: string[] = ['questionText', 'firstOptionText','secondOptionText','thirdOptionText','fourthOptionText','fifthOptionText','correctOptionText','edit','delete'];
  dataSource:MatTableDataSource<ListExam>=null;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  exams:any[]=[]


  constructor(
    spinner:NgxSpinnerService ,
    private examService:ExamService, 
    private alertifyService: AlertifyService) {
    super(spinner)
   }
  

  async ngOnInit() {
   this.getExams();
  }
  getExams(){
    this.examService.getExams().subscribe(response=>{
      this.exams=response.data
  })
  }

}
