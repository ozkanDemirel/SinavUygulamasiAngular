import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Option } from '../models/option';

@Injectable({
  providedIn: 'root'
})
export class OptionService {

  apiUrl:string ="http://localhost:8080/api/options/getAll";

  constructor(private httpClient: HttpClient) { }

  getOptions(): Observable<ListResponseModel<Option>> {
    return this.httpClient.get<ListResponseModel<Option>>(this.apiUrl);
  }
}
