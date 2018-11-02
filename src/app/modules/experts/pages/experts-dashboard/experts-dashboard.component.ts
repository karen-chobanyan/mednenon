import { Component, OnInit } from '@angular/core';
import { getFromLocalStorage } from '../../../../shared/utils/local-storage';
import { PatientService } from '../../../../core/services/patient.service';

@Component({
  selector: 'app-experts-dashboard',
  templateUrl: './experts-dashboard.component.html',
  styleUrls: ['./experts-dashboard.component.css']
})
export class ExpertsDashboardComponent implements OnInit {
  private user: any;
  private appointment = [];
  public myAppointment = [];

  constructor(
    private patientService: PatientService
  ) { }

  ngOnInit() {
    this.loadPendingPatients();
  }

  loadPendingPatients() {
    this.user = getFromLocalStorage('user');
    this.patientService.getPendingPatients().subscribe((patients: any) => {
      if (!patients.Error) {
        this.myAppointment = patients;
      } else {
        this.myAppointment = [];
      }
    });
    setTimeout(function(){
      this.loadPendingPatients();
    }.bind(this),30*1000);
  }

  acceptPatientExperts(id){
    this.user = getFromLocalStorage('user');
    this.patientService.acceptPatientExperts(id, this.user.UserID, 1, '').subscribe((patients: any) => {
      this.loadPendingPatients();
    })
  }

}
