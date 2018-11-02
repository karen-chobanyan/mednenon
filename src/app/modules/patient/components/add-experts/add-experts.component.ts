import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PatientService } from '../../../../core/services/patient.service';
import { getFromLocalStorage } from '../../../../shared/utils/local-storage';

@Component({
  selector: 'app-add-experts',
  templateUrl: './add-experts.component.html',
  styleUrls: ['./add-experts.component.css']
})
export class AddExpertsComponent implements OnInit {
  status: boolean = false;
  selected = 'sort';
  private user: any;
  public filteredExperts = [];
  public patientAddExperts: any = [];
  private experts = [];
  public filter = [];
  private ExpertsPatientId:any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddExpertsComponent>,
    private patientService: PatientService,
  ) { }
  

  ngOnInit() {
    this.user = getFromLocalStorage('user');
    this.patientService.getExpertList().subscribe((res: any) => {    
      this.experts = res;
    })    
    this.patientService.getUnassigned().subscribe((patients: any) => {
    })
    
    this.patientService.GetRecentPgiDetal(this.data.patientId).subscribe((res: any) => {
      this.patientAddExperts = res.PGI_RecordID;
    });

  }

  modelChanged(e) {
    this.filteredExperts = this.experts.filter(expert => {
      return expert.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1;
    });
  }
  sortBy(val) {
    this.filteredExperts = this.experts.filter(a => {
      return a.counsellor.indexOf(val.value) > -1;
    })
  }

  openSort() {
    this.status = !this.status;
  }

  addExpert(e, expertId) {
    this.patientService.addExpert(this.data.patientId, expertId, this.patientAddExperts)
    .subscribe(res => {
      e.target.innerHTML = 'Request Message Sent';
      this.ExpertsPatientId = this.data.patientId;      ;
      
    })
  }
  onNoClick(): void {
    this.dialogRef.close(this.ExpertsPatientId);
  }
}
