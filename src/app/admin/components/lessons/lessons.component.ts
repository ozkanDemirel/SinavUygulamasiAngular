import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css'],
})
export class LessonsComponent implements OnInit {
  constructor(private httpClientService: HttpClientService) {}

  ngOnInit(): void {
    /*this.httpClientService
      .get<LessonCreate[]>({
        contoller: 'lessons',
      })
      .subscribe((data) => console.log(data));*/
      /*
    this.httpClientService
      .post(
        {
          contoller: 'lessons',
        },
        {

        }
      ).subscribe();

      this.httpClientService
      .put(
        {
          contoller: 'lessons',
        },
        {

        }
      ).subscribe();

      this.httpClientService
      .delete(
        {
          contoller: 'lessons',
        }, "" ).subscribe();

        this.httpClientService.get({
          fullEndPoint: "https://jasonplaceholder.typicode.com/posts"
        }).subscribe(data=>console.log(data))
        */
  }
}
