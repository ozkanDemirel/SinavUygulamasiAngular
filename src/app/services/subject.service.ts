import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Subject } from '../models/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  apiUrl:string ="http://localhost:8080/api/";

  constructor(private httpClient:HttpClient) { }

  getSubjects(): Observable<ListResponseModel<Subject>> {
    //let newPath = this.apiUrl + "http://localhost:8080/api/subjects/getAll";
    return this.httpClient.get<ListResponseModel<Subject>>("http://localhost:8080/api/subjects/getAll");
  }
 
  getSubjectsByLesson(lessonId:number): Observable<ListResponseModel<Subject>> {
    let newPath = this.apiUrl + "subjects/getAllByLesson?lessonId="+lessonId;
    return this.httpClient.get<ListResponseModel<Subject>>(newPath);
  }
}
