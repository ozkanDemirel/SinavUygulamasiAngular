import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListSubject } from 'src/app/contracts/list-subject';
import { SubjectService } from 'src/app/services/common/models/subject.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  constructor(private subjectService:SubjectService,  private activatedRoute:ActivatedRoute) { }

  subjects:ListSubject[]=[];
  currentSubject:any;

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

  setCurrentSubject(subject:ListSubject){
    this.currentSubject = subject;
  }

}
