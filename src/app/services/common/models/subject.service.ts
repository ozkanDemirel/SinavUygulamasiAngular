import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { CreateSubject } from 'src/app/contracts/create-subject';

import { ListSubject } from 'src/app/contracts/list-subject';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private httpClientService:HttpClientService, private httpClient: HttpClient) { }

 create(subject:CreateSubject, successCallBack?: () => void, errorCallBack?: (errorMessage:string) => void){
    this.httpClientService.post({controller:"subjects/add"},subject).subscribe(result=>{
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
/*
  create(subject:ListSubject){
    this.httpClient.post(this.apiUrl+"/add",subject)
  }*/

  apiUrl:string ="http://localhost:8080/api/subjects/";

  getSubjects(): Observable<ListResponseModel<ListSubject>> {
    let newApiUrl:string= this.apiUrl+"getAll"
    return this.httpClient.get<ListResponseModel<ListSubject>>(newApiUrl);
  }

  /*async delete(id:number){
    const deleteObservable: Observable<any> = this.httpClientService.delete<any>({
      controller:"subjects/delete",
      
    },id);
    await firstValueFrom(deleteObservable);
  }*/

  delete(id:number){
    let newApiUrl:string= this.apiUrl+id
    return this.httpClient.delete(newApiUrl);
  
  }

  getSubjectsByLesson(lessonId:number){
    let newApiUrl:string=this.apiUrl+"getAllByLesson?lessonId="+lessonId;
    return this.httpClient.get<ListResponseModel<ListSubject>>(newApiUrl);
  }

  
  
}
