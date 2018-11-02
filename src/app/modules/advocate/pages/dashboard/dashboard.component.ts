import { Component, OnInit } from '@angular/core';
import { getUserType, getFromLocalStorage } from '../../../../shared/utils/local-storage';
import { PatientService } from '../../../../core/services/patient.service';
import { MatDialog , MatDialogRef} from '@angular/material';
import { AddExpertsComponent } from '../../components/add-experts/add-experts.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private user:any;
  id: number;
  userType;
  private sub: any;
  private patientRequests: any[] = [];
  private patientAssigned: any[] = [];
  private patientCompleted: any[] = [];


  private acceptedPatient:any = [];
  public viewPatientRequest: any = [];
  constructor(
    private patientService: PatientService,
    public dialog: MatDialog,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit() {  
    this.user = getFromLocalStorage('user');  
     this.patientService.getUnassigned().subscribe((patients: any) => {
       if( !patients.Error){
        this.patientRequests = patients; 
      } else {
        this.patientRequests  = [];
      }
     });

     this.patientService.GetAdvocatePatientsPendingAcceptance().subscribe((patients: any) => {
      if( !patients.Error){
       this.patientAssigned = patients; 
     } else {
       this.patientAssigned  = [];
     }
    });

    this.patientService.GetAdvocatePatientsPendingOpinion().subscribe((patients: any) => {
      if( !patients.Error){
       this.patientCompleted = patients; 
     } else {
       this.patientCompleted  = [];
     }
    });
     

     this.userType = getUserType();
     this.sub = this.activeRoute.params.subscribe(params => {
       this.id = +params['id'];
       this.patientService.GetRecentPgiDetal(this.id).subscribe((res: any) => {
         console.log(res) 
       })
     });
  }

  // viewPatient(pat){    
  //   console.log(pat);
  //   this.patientService.patientAccept(pat.PatientID).subscribe(res=>{
  //     this.viewPatientRequest = this.patientRequests.filter(patients=>{
  //       console.log(patients);
        
  //       // return patients.PatientID.indexOf(pat.value) > -1;
  //     })
  //   });
  // }

  assignExperts(id){
    console.log(id);    
    const dialogRef = this.dialog.open(AddExpertsComponent, {data: {patientId: id}});
    dialogRef.afterClosed().subscribe(result => {
      this.patientRequests = this.patientRequests.filter(res => {
        return res.PatientID != result;
      }) 
    });
  }
}
