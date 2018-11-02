import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ManagePatientComponent } from '../../components/manage-patient/manage-patient.component';
import { AddExpertsComponent } from '../../components/add-experts/add-experts.component';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../../../../core/services/patient.service';
import { getUserType, getImage } from '../../../../shared/utils/local-storage';

@Component({
  selector: 'app-patient-screen',
  templateUrl: './patient-screen.component.html',
  styleUrls: ['./patient-screen.component.css']
})


export class PatientScreenComponent implements OnInit, OnDestroy {  
  id: number;
  private action:any;
  private patient: any[] = [];
  private experts: any;
  userType;

  private sub: any;
  constructor(
    public dialog: MatDialog,
    private activeRoute: ActivatedRoute,
    private patientService: PatientService,
  ) {
    
  }

  
  getImage(url): any {
    return getImage(url);
  }

  ngOnInit() {
    this.userType = getUserType();
    this.sub = this.activeRoute.params.subscribe(params => {
      this.id = params['id'];
      this.action = params['action'];
      if(this.action == "add_experts"){
        this.addexperts(this.id);
      }
      this.patientService.GetRecentPgiDetal(this.id).subscribe((res: any) => {
        this.patient = res;       
      })
    });
    this.patientService.getExpertList().subscribe((res: any) => {
      this.experts = res;
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  datapatients(id) {
    this.dialog.open(ManagePatientComponent, {data: { patientId: id }});
  }

  addexperts(id) {
    this.dialog.open(AddExpertsComponent, { data: { patientId: id } });    
  }

}
