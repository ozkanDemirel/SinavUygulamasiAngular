import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base/base.component';
import { CreateExam } from 'src/app/contracts/create-exam';
import { ListExam } from 'src/app/contracts/list-exam';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { ExamService } from 'src/app/services/common/models/exam.service';
import { SubjectService } from 'src/app/services/common/models/subject.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent extends BaseComponent implements OnInit {

  displayedColumns: string[] = ['questionText', 'firstOptionText','secondOptionText','thirdOptionText','fourthOptionText','fifthOptionText','correctOptionText', 'edit', 'delete'];
  dataSource:MatTableDataSource<ListExam>=null;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  exams:any[]=[]
  subjectId:number;
  subjects:any[]=[];

  constructor(
    spinner:NgxSpinnerService, 
    private examService:ExamService, 
    private subjectService:SubjectService,
    private alertifyService:AlertifyService) { 
      super(spinner)
    }

  ngOnInit(): void {
    this.getSubjects();
  }

  getSubjectId(subjectId:number){
    this.subjectId =subjectId
  }

  getSubjects(){
    this.subjectService.getSubjects().subscribe(response=>{
      this.subjects = response.data
    })
  }

  create(
    questionText:HTMLInputElement, 
    firstOptionText:HTMLInputElement, 
    secondOptionText:HTMLInputElement, 
    thirdOptionText:HTMLInputElement,
    fourthOptionText:HTMLInputElement,
    fifthOptionText:HTMLInputElement,
    correctOptionText:HTMLInputElement){

    this.showSpinner(SpinnerType.BallAtom);

    const createExam:CreateExam = new CreateExam();
    createExam.subjectId=this.subjectId
    createExam.questionText=questionText.value;
    createExam.firstOptionText=firstOptionText.value;
    createExam.secondOptionText=secondOptionText.value;
    createExam.thirdOptionText=thirdOptionText.value;
    createExam.fourthOptionText=fourthOptionText.value;
    createExam.fifthOptionText=fifthOptionText.value;
    createExam.trueOptionText=correctOptionText.value;

    this.examService.create(createExam, ()=>{
      this.hideSpinner(SpinnerType.BallAtom);
      this.alertifyService.message(
      "Sınav Sorusu Ekleme Başarılı",
      {
        dismissOther:true,
        messageType:MessageType.Success,
        position:Position.BottomRight
      });
    }, errorMessage => {
      this.alertifyService.message(/*errorMessage*/"Ekleme Başarısız",
        {
          dismissOther: true,
          messageType: MessageType.Error,
          position: Position.TopRight
        });
    });
  }
}
