import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'src/app/models/subject';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  subjects:Subject[]=[];
  currentSubject:Subject;

  constructor(private subjectService:SubjectService,  private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      
        this.getSubjectsByLesson(params["lessonId"]);
      
    })
  }

  getSubjectsByLesson(lessonId:number){
    this.subjectService.getSubjectsByLesson(lessonId).subscribe(response=>{
      this.subjects = response.data
    })

  }

  setCurrentSubject(subject:Subject){
    this.currentSubject = subject;
  }

}
