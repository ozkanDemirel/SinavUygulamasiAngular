import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { CreateExam } from 'src/app/contracts/create-exam';
import { ListExam } from 'src/app/contracts/list-exam';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private httpClientService:HttpClientService, private httpClient: HttpClient) { }

  create(exam:CreateExam, successCallBack?: () => void, errorCallBack?: (errorMessage:string) => void){
    this.httpClientService.post({controller:"exams/add"},exam).subscribe(result=>{
      successCallBack();
    },
    (errorResponse: HttpErrorResponse) => {
      const _error: Array<{ key: string, value: Array<string> }> = errorResponse.error;
      let message = "";
      Array.from(_error).forEach((v, index) => {
        v.value.forEach((_v, _index) => {
          message += `${_v}<br>`;
        });
      });
      errorCallBack(message);
    });
  }


  apiUrl:string ="http://localhost:8080/api/exams/";

  getExams(): Observable<ListResponseModel<ListExam>> {
    let newApiUrl:string = this.apiUrl+ "getAll"
    return this.httpClient.get<ListResponseModel<ListExam>>(newApiUrl);
  }

 /* async delete(id:number){
    const deleteObservable: Observable<any> = this.httpClientService.delete<any>({
      controller:"exams/delete",
      
    },id);
    await firstValueFrom(deleteObservable);
  }*/

  delete(id:number){
    let newApiUrl:string= this.apiUrl+id
    return this.httpClient.delete(newApiUrl);
  
  }
  getExamsBySubject(subjectId:number):Observable<ListResponseModel<ListExam>>{
    let newPath = this.apiUrl+ "getAllBySubjectId?subjectId="+subjectId;
    return this.httpClient.get<ListResponseModel<ListExam>>(newPath);
  }

  addExam(){
    let newPath = this.apiUrl +"exams/"
  }
  
}
