import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { appConfig } from '../../shared/app.config';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { getFromLocalStorage, setToLocalStorage, removeFromLocalStorage } from '../../shared/utils/local-storage';

@Injectable({
  providedIn: 'root'
})
export class ExpertService {
  
  apiUrl = appConfig.apiUrl;
  constructor( private http: HttpClient) { }


}
