import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { firstValueFrom,Observable } from 'rxjs';
import { CreateLesson } from 'src/app/contracts/create-lesson';
import { ListLesson } from 'src/app/contracts/list-lesson';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  
  constructor(private httpClientService:HttpClientService, private httpClient: HttpClient, @Inject ("baseUrl") private baseUrl:string) { }

  create(lesson:CreateLesson, successCallBack?: () => void, errorCallBack?: (errorMessage:string) => void){
    this.httpClientService.post({controller:"lessons/add"},lesson).subscribe(result=>{
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
  async read(page:number = 0, size:number = 5, successCallBack?: () => void, errorCallBack?: (errorMessage:string) => void): Promise<{totalLessonCount: number;lessons: ListLesson[]}>{
    const promiseData:Promise<{totalLessonCount: number;lessons: ListLesson[]}> = this.httpClientService.get<{totalLessonCount: number;lessons: ListLesson[]}>({
      controller : "lessons",
      queryString: `getAllByPage/${page}/${size}`
    }).toPromise();

    promiseData.then(d =>successCallBack()).catch((errorResponse:HttpErrorResponse)=>errorCallBack(errorResponse.message));

    return await promiseData;
  }*/

  apiUrl:string ="http://localhost:8080/api/lessons/";

  getLessons(): Observable<ListResponseModel<ListLesson>> {
    let newApiUrl:string= this.apiUrl+"getAll"
    return this.httpClient.get<ListResponseModel<ListLesson>>(newApiUrl);
  }

 /*async delete(id:number){
    const deleteObservable: Observable<any> = this.httpClientService.delete<any>({
      controller:"lessons",
      
    },id);
    await firstValueFrom(deleteObservable);
  }*/

delete(id:number){
  let newApiUrl:string= this.apiUrl+id
  return this.httpClient.delete(newApiUrl);

}

getByLessonId(id:number){
  let newApiUrl:string = this.baseUrl+"/lessons/getByLessonId?lessonId="+id
  return this.httpClient.get<ListResponseModel<ListLesson>>(newApiUrl);

}

  
  
}
