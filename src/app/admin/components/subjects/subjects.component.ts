import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { LessonService } from 'src/app/services/common/models/lesson.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  
  constructor(private httpClientService: HttpClientService) { }

  ngOnInit(): void {
    
  }

 

}
