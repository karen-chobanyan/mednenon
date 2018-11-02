import { Injectable } from '@angular/core';
import { appConfig } from '../../shared/app.config';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class AskAnythingService {
  urlOnlyForOauth = appConfig.apiOauth;
  apiUrl = appConfig.apiUrl;
  constructor(
    private http: HttpClient,
  ) { }

  askquestion(question){
    let headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = new HttpParams()
    .set("Name", question.name)
    .set("Email", question.email)
    .set("Message", question.message);
   
    return this.http.post(`${this.apiUrl}/user/action/AskGeneralQuestion/`, params.toString() ,
    {
      headers: headers
    });
  }  
}
