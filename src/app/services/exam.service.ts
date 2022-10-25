import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exam } from '../models/exam';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  apiUrl:string = "http://localhost:8080/api/"

  constructor(private httpClient:HttpClient) { }


  getExamsBySubject(subjectId:number):Observable<ListResponseModel<Exam>>{
    let newPath = this.apiUrl+ "exams/getAllBySubjectId?subjectId="+subjectId;
    return this.httpClient.get<ListResponseModel<Exam>>(newPath);
  }
}
