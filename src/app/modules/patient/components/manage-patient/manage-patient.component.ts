import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { getFromLocalStorage } from '../../../../shared/utils/local-storage';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../../../../core/services/patient.service';

@Component({
  selector: 'app-manage-patient',
  templateUrl: './manage-patient.component.html',
  styleUrls: ['./manage-patient.component.css']
})
export class ManagePatientComponent implements OnInit, OnDestroy {
  user:any;
  selected = 'option2';
  private sub: any;
  private managePatient: any[] = [];
  id: number;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ManagePatientComponent>,
    private patientService:PatientService,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.user = getFromLocalStorage('user');   
    this.sub = this.activeRoute.params.subscribe(params => {
      this.id = +params['id'];
      this.patientService.GetRecentPgiDetal(this.data.patientId).subscribe((res: any) => {
        this.managePatient = res;
      });
    });
  }

  onNoClick(): void {
    this.dialogRef.close(this.data.patientId);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
