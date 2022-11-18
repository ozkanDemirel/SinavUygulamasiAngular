import { Element } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { timer ,delay} from 'rxjs';
import { ExamService } from 'src/app/services/common/models/exam.service';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css'],
})
export class ExamsComponent implements OnInit {
  exams: any[] = [];
  examList: any[] = [];
  optionList: any[] = [];
  questionList: any[] = [];
  currentQuestion: number = 0;
  correctOption: number = 0;
  incorrectOption: number = 0;
  point: number = 0;
  isQuizCompleted: boolean = false;
  isCorrect:boolean=false;
  isExoption:boolean=true
  isIncorrect:boolean=false
  selectedAnswer;
  isFinish:boolean=true

  
  constructor(
    private examService: ExamService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe((params) =>
      this.getExamsBySubject(params['subjectId'])
    ),
      this.activatedRoute.params.subscribe((params) =>
        this.getAllQuestion(params['subjectId'])
      ),
      this.activatedRoute.params.subscribe((params) =>
        this.getAllOptions(params['subjectId'])
      );


  }
  getExamsBySubject(subjectId: number) {
    this.examService
      .getExamsBySubject(subjectId)
      .subscribe((response) => (this.exams = response.data));
  }

  getAllQuestion(subjectId: number) {
    this.examService
      .getExamsBySubject(subjectId)
      .subscribe((response) => (this.questionList = response.data));
  }
  getAllOptions(subjectId: number) {
    this.examService
      .getExamsBySubject(subjectId)
      .subscribe((response) => (this.optionList = response.data));
  }

  nextQuestion() {
    
    if (  this.examList.length < this.currentQuestion) {
     
      this.isQuizCompleted=true
      this.isFinish=false

    }
      this.currentQuestion++;
      
  }
  previousQuestion() {
    this.currentQuestion--;
  }

//seçme işlemi
  selectChoice(options) {
   if (options === this.exams[this.currentQuestion].trueOptionText) {
      this.point += 10;
      this.correctOption++;
      
     setTimeout(() => {
      
          this.nextQuestion();
          
          
      }, 1000);
      
    } 
    else {
      this.incorrectOption++;

      setTimeout(() => { 
         
        this.nextQuestion(); 
       
       
        
      }, 1000);
    }
    
  }


/*
  answer(currentQuestionNumber: number, option: any) {
    if (currentQuestionNumber === this.examList.length) {
      this.isQuizCompleted === true;
    }

    if (option == this.examList[this.currentQuestion].trueOptionText) {
      this.point += 10;
      this.correctOption++;
    } else {
      this.point -= 0.25;
      this.incorrectOption++;
    }*/
  }

     




       
 

