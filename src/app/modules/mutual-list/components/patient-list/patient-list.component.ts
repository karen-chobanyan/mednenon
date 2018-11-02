import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../../core/services/patient.service';
import { getFromLocalStorage, getUserType } from '../../../../shared/utils/local-storage';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  private user:any;
  private userType:any;
  public filterPatientList:any[] = [];
  private gene: any;
  private vendors: any = [];
  private vendor:any = null;
  private status:any = null;
  public isAdvocate;
  private patientList: any[] = [];
  constructor(private patientService:PatientService,) { }

  ngOnInit() {
    this.user = getFromLocalStorage('user');
    this.userType = getUserType();
    this.isAdvocate = this.user.IsAdvocate == '1';
    this.patientService.getVendors().subscribe((res: any) => {
      this.vendors = res || [];
    });
    this.loadPatients();
  }

  loadPatients(){
    this.patientService.getPatientList(this.vendor,this.status).subscribe( (patients: any) => {
      if( !patients.Error){
        this.patientList = patients;
        this.filterPatientList = this.patientList;        
      } else {
        this.patientList  = [];
      }      
    });
  }

  filterChanged(e){
    this.loadPatients();
  }

  modelChanged(e){
    this.filterPatientList = this.patientList.filter(res => {
      return res.FirstName.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1 || res.LastName.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1;
    });
  }

}
