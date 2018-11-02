import { Injectable } from '@angular/core';
import { appConfig } from '../../shared/app.config';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class PartnerService {
  urlOnlyForOauth = appConfig.apiOauth;
  apiUrl = appConfig.apiUrl;
  constructor(
    private http: HttpClient,
  ) { }

  genes(){
    return this.http.get(`${this.apiUrl}/lookup/PatientGene/`);
  }

  surgeries(){
    return this.http.get(`${this.apiUrl}/lookup/PriorSurgery/`);
  }

  cancers(){
    return this.http.get(`${this.apiUrl}/lookup/PriorCancer/`);
  }

}
