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
  private user:any;
  public fiteredExperts = [];
  public GetRecent:any = [];
  private experts = [];
  public assignedPatientId;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddExpertsComponent>,
    private patientService: PatientService,
  ) { }

  ngOnInit() {
    this.user = getFromLocalStorage('user');
    this.patientService.getExpertList().subscribe((res:any)=>{
      console.log(res);
      this.experts = res;
      this.fiteredExperts = this.experts;
    })
    this.patientService.getUnassigned().subscribe((patients: any) => {
      console.log(patients);
    })
    this.patientService.GetRecentPgiDetal(this.data.patientId).subscribe((res:any) => {
      console.log(res);
      this.GetRecent = res.PGI_RecordID;      
    });
    // this.filter = this.experts;
  }

  addExpert(e, expertId){
    this.patientService.addExpert(this.data.patientId, expertId, this.GetRecent).subscribe(res=>{     
      console.log(res); 
      e.target.innerHTML = 'Request Message Sent';
      this.assignedPatientId = this.data.patientId;     
    })

  }

  modelChanged(e){  
    this.fiteredExperts = this.experts.filter(expert => {
      return expert.FirstName.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1;
    });    
  }

  sortBy(val){
      this.fiteredExperts = this.experts.filter(a => {
        return a.Title.indexOf(val.value) > -1;
      })
  }

  onNoClick(): void {
    this.dialogRef.close(this.assignedPatientId);
  }
  
  openSort() {
    this.status = !this.status;
  }

}
