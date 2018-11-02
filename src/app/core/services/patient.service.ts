import { Injectable } from '@angular/core';
import { appConfig } from '../../shared/app.config';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { getFromLocalStorage } from '../../shared/utils/local-storage';
import * as moment from 'moment';
@Injectable()
export class PatientService {
  apiUrl = appConfig.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getPatientList(vendor,status) {
    const user = getFromLocalStorage('user');
    
    const jsonObj  = {
      VendorID: vendor || '',
      Status: status || '',
      SearchText: ''
    }

    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const params = new HttpParams()
      .set('sessionPass', user.SESSION_PASSCODE)
      .set('jsonInput',JSON.stringify(jsonObj));

    let url = '';
    // if (user.UserTypeName === 'Vendor') {
    //   url = 'GetVendorPatients';
    // } else if (user.UserTypeName === 'Expert' && user.IsAdvocate === "1") {
    //   url = 'GetAdvocatePatients';
    // } else if (user.UserTypeName === 'Expert') {
    //   url = 'GetExpertPatients';
    // }

    if (user.UserTypeID === '4') {
      url = 'GetVendorPatients';
    } else if (user.UserTypeID === '2' && user.IsAdvocate === "1") {
      url = 'GetAdvocatePatients';
    } else if (user.UserTypeID === '2') {
      url = 'GetExpertPatients';
    } else if(user.UserTypeID === '1'){
      url = 'GetAdvocatePatients';
    }else if(user.UserTypeID === '2' && user.IsAdminAdvocate == '1'){
      url = 'GetAdvocatePatients';
    }
    return this.http.post(`${this.apiUrl}/patient/action/${url}/`, params.toString(),
      {
        headers: headers,
        withCredentials: true
      });
  }

  addPatient(data, labReport, attachments) {
    const jsonInput = JSON.stringify({
      'Gene': data.Gene,
      'LastName': data.LastName,
      'FirstName': data.FirstName,
      'Email': data.Email,
      'Gender': data.Gender,
      'DOB': moment(data.DOB).format('YYYY-MM-DD'),
      'Ethnicity': data.Ethnicity,
      'Surgeries': data.Surgeries,
      'PriorCancer': data.PriorCancer,
      'SpecimenType': data.SpecimenType,
      'CollectionDate': moment(data.CollectionDate).format('YYYY-MM-DD'),
      'AnalysisDate': moment(data.AnalysisDate).format('YYYY-MM-DD'),
      'attachmentNames': data.attachmentNames
    });
    const user = getFromLocalStorage('user');
    const headers = new HttpHeaders({
      //  'Content-Type': null,
      'Accept': 'multipart/form-data',
    });

    const params = new FormData();
    params.append('sessionPass', user.SESSION_PASSCODE);
    params.append('jsonInput', jsonInput);
    params.append('labReportFile', labReport);
    params.append('attachments', attachments);
    return this.http.post(`${this.apiUrl}/patient/action/AddPartnerPatient/`, params,
      {
        headers: headers,
        withCredentials: true
      });
  }

  getUnassigned() {
    const user = getFromLocalStorage('user');
    const params = new HttpParams()

      .set('sessionPass', user.SESSION_PASSCODE);
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(`${this.apiUrl}/patient/action/GetAdvocatePendingPatients/`, params,
      {
        headers: headers,
        withCredentials: true
      });
  }

  GetAdvocatePatientsPendingAcceptance() {
    const user = getFromLocalStorage('user');
    const params = new HttpParams()

      .set('sessionPass', user.SESSION_PASSCODE);
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(`${this.apiUrl}/patient/action/GetAdvocatePatientsPendingAcceptance/`, params,
      {
        headers: headers,
        withCredentials: true
      });
  }

  getVendors() {
    const user = getFromLocalStorage('user');
    let sessionPass = user.SESSION_PASSCODE;
    return this.http.get(`${this.apiUrl}/lookup/VendorList/?sessionPass=${sessionPass}`, {withCredentials:true});
  }

  GetAdvocatePatientsPendingOpinion() {
    const user = getFromLocalStorage('user');
    const params = new HttpParams()

      .set('sessionPass', user.SESSION_PASSCODE);
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(`${this.apiUrl}/patient/action/GetAdvocatePatientsPendingOpinion/`, params,
      {
        headers: headers,
        withCredentials: true
      });
  }



  patientAccept(data) {
    return this.http.post(`${this.apiUrl}/patient/action/AcceptPatient/`, data)
  }

  addExpert(patientId, expertId, PGIRecordID) {
    let user = getFromLocalStorage('user');
    let jsonInput = JSON.stringify({
      "PatientID": patientId,
      "ExpertID": expertId,
      "PGIRecordID": PGIRecordID
    })
    const params = new FormData();
    params.append('sessionPass', user.SESSION_PASSCODE);
    params.append('jsonInput', jsonInput)
    
    return this.http.post(`${this.apiUrl}/patient/action/AssignExpertForPGI/`, params);
  }

  getExpertList(){
    let user = getFromLocalStorage('user');
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const params = new HttpParams()
    .append('sessionPass', user.SESSION_PASSCODE);
    return this.http.post(`${this.apiUrl}/user/action/GetExpertList/`, params, {
      headers: headers,
      withCredentials : true 
    });
  }

  GetRecentPgiDetal(patientId){
    let user = getFromLocalStorage('user');
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const params = new HttpParams()
    .set('sessionPass', user.SESSION_PASSCODE)
    .set('patientID', patientId);
    return this.http.post(`${this.apiUrl}/patient/action/GetRecentPGIDetail/`, params,{
      headers: headers,
      withCredentials: true
    });
  }

  getPendingPatients(){
    const user = getFromLocalStorage('user');
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
   
    const params = new HttpParams()
      .set('sessionPass', user.SESSION_PASSCODE);      
    return this.http.post(`${this.apiUrl}/patient/action/GetExpertPendingPatients/`, params,{
      headers: headers,
      withCredentials: true
    });      
  }

  acceptPatientExperts(pendingrequestId, patientId, isAccepted, comments){
    const user = getFromLocalStorage('user');
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'});
    
    let jsonInput = JSON.stringify({
      "PendingRequestID": pendingrequestId,
      "ExpertID": patientId,
      "IsAccept": isAccepted,
      "Comments": comments
    });

    const params = new HttpParams()
    .set('sessionPass', user.SESSION_PASSCODE)    
    .set("jsonInput", jsonInput);
    return this.http.post(`${this.apiUrl}/patient/action/AcceptPGIByExpert/`, params,{
      headers: headers,
      withCredentials: true
    });  
  }

  getResultOpinion(PGIRecordID, ExpertID, comments){
    const user = getFromLocalStorage('user');
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let jsonInput = JSON.stringify({
      "PGIRecordID": PGIRecordID,
      "ExpertID": ExpertID,
      "Comments": comments
    });
    const params = new HttpParams()
      .set('sessionPass', user.SESSION_PASSCODE)
      .set("jsonInput", jsonInput)     
    return this.http.post(`${this.apiUrl}/patient/action/AddPGIOpinion/`, params,{
      headers: headers,
      withCredentials: true
    });      
  }
}
