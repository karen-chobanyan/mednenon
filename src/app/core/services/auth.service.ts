import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { appConfig } from '../../shared/app.config';
// import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { getFromLocalStorage, setToLocalStorage, removeFromLocalStorage } from '../../shared/utils/local-storage';

@Injectable()
export class AuthService {


  urlOnlyForOauth = appConfig.apiOauth;
  apiUrl = appConfig.apiUrl;
  isLoggedIN = new BehaviorSubject(false);
  constructor(
    private http: HttpClient,
  ) {

  }

  signInUser(email: string, password: string): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = new HttpParams()
    .set("userN", email)
    .set("accessKey", password);
   
    return this.http.post(`${this.apiUrl}/user/login/`, params.toString() ,
    {
      headers: headers,
      withCredentials: true
    });
  }

  recoveryPassword(email: string): any {
    this.http.post(`${this.apiUrl}/send-link-reset-password`, {
      email: email,
    })
    .subscribe(
      data => {
          console.log("PUT Request is successful ", data);
      },
      error => {
          console.log("Rrror", error);
      }
  ); 
  }

  newPassword(password: string, key: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/change-password-by-link`, {
      password: password,
      key: key
    });
  }

  signUpUser(user): Observable<any> {
    console.log(user);
    
    let headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = new HttpParams()
    .set("FirstName", user.firstName)
    .set("MiddleName", user.middleName)
    .set("LastName",user.lastName)
    .set("Email",user. email)
    .set("Zip", user.zipCode)
    .set("City", user.city)
    .set("State", user.state)
    .set("CurrentPhase", user.notyficationOpt);
   
    return this.http.post(`${this.apiUrl}/user/registerpatient/`, user);

    // return this.http.post(`${this.apiUrl}/user/registerpatient/`, user);
  }

  addData(url: string, body): Observable<any> {
    return this.http.post('/' + url, body);
  }

  signOutUser(): Observable<any> {
    const body = {

    };

    return this.http.post(`${this.urlOnlyForOauth}/revoke`, body);
  }

  get isLogged() {
    // const helper = new JwtHelperService();
    // const auth: any = getFromLocalStorage('MEDNEON_AUTH');
    // if (auth && !helper.isTokenExpired(auth.token)) {
    //   return true;
    // }
    // removeFromLocalStorage(['GLOBE_AUTH', 'MEDNEON_USER']);
    return false;
  }

  forgotPassword(email: string): Observable<any> {
    console.log(email);
    return this.http.post(`${this.apiUrl}/users/forgotpassword`, {
      email: email,
    });
  }

  createNewPassword(password: string, email: any, token: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/`, {
      email: email,
      token: token,
      password: password
    });
  }
}

