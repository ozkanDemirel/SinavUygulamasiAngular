import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Exam } from 'src/app/models/exam';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {


  exams: Exam[]=[]
  examList:any[]=[];
  optionList:any[]=[];
  currentQuestion:number=0;
  correctOption: number = 0;
  incorrectOption:number=0;
  point:number=0;
  isQuizCompleted : boolean = false;
  
  constructor(private examService:ExamService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>
    this.getExamsBySubject(params["subjectId"])),
    this.activatedRoute.params.subscribe(params =>
      this.getAllQuestion(params["subjectId"])),
      this.activatedRoute.params.subscribe(params =>
        this.getAllOptions(params["subjectId"]))
  }

  getExamsBySubject(subjectId:number){
    this.examService.getExamsBySubject(subjectId).subscribe(response=>
      this.exams=response.data)
      
  }

  getAllQuestion(subjectId:number){
    this.examService.getExamsBySubject(subjectId).subscribe(response=>
      this.optionList=response.data);
      
  }
  getAllOptions(subjectId:number){
    this.examService.getExamsBySubject(subjectId).subscribe(response=>
      this.examList=response.data);
      
  }

  nextQuestion(){
    this.currentQuestion++;
  }
  previousQuestion(){
    this.currentQuestion--;
  }

  answer(currentQuestionNumber:number, option:any){

    if(currentQuestionNumber=== this.examList.length){
      this.isQuizCompleted===true;
    }

    if(option==this.examList[this.currentQuestion].trueOptionText){
      this.point+=10;
      this.correctOption++;
    }
    else{
      this.point-=0.25;
      this.incorrectOption++; 
    }
  }

   
}

