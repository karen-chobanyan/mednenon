import { Injectable } from '@angular/core';
import { appConfig } from '../../shared/app.config';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { getFromLocalStorage } from '../../shared/utils/local-storage';
import { HttpService } from './http.service';
@Injectable()

export class AdvocateService {
  urlOnlyForOauth = appConfig.apiOauth;
  apiUrl = appConfig.apiUrl;
  constructor(
    private http:HttpService,
  ) { }

}
