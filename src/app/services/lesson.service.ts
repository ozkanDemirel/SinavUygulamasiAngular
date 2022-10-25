import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Lesson } from '../models/lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  apiUrl:string ="http://localhost:8080/api/lessons/getAll";

  constructor(private httpClient: HttpClient) { }

  getLessons(): Observable<ListResponseModel<Lesson>> {
    return this.httpClient.get<ListResponseModel<Lesson>>(this.apiUrl);
  }

}
