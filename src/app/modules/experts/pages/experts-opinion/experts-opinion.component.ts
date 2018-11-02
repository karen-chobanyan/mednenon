import { Component, OnInit, OnDestroy } from '@angular/core';
import { getFromLocalStorage, getUserType } from '../../../../shared/utils/local-storage';
import { PatientService } from '../../../../core/services/patient.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-experts-opinion',
  templateUrl: './experts-opinion.component.html',
  styleUrls: ['./experts-opinion.component.css']
})
export class ExpertsOpinionComponent implements OnInit, OnDestroy {
  private user: any;
  private userType: any;
  opinionResults: FormGroup;
  public genetic:any = [];
  public medical:any = [];
  public experts:any = [];
  private sub: any;
  id: number;
  private patient: any = [];
  constructor(
    private patientService:PatientService,
    private activeRoute: ActivatedRoute,
  ) {
    
   }

  ngOnInit() {
    this.user = getFromLocalStorage('user');
    this.userType = getUserType();
    this.sub = this.activeRoute.params.subscribe(params => {
      this.id = +params['id'];
      this.patientService.GetRecentPgiDetal(this.id).subscribe((res: any) => {
        this.patient = res;        
      })
    });
    this.patientService.getExpertList().subscribe((res: any) => {
      this.experts = res;
    })
    this.opinionResults = new FormGroup({
      geneticpdf: new FormControl('', Validators.required),
      medicialpdf:new FormControl('', Validators.required),
      writeopinion: new FormControl('', Validators.required),
    })
  }

  GeneticFile(e){
    if(e.target.files && e.target.files.length) {
      const file = e.target.files[0].name;
      this.genetic = file;   
    }
  }

  MedicalFile(e){
    if(e.target.files && e.target.files.length) {
      const file = e.target.files[0].name;
      this.medical= file;
    }
  }

  opinionRequest(opinion){
    if(this.opinionResults.valid){      
      this.patientService.getResultOpinion(this.patient.PGI_RecordID, this.user.UserID, opinion.controls['writeopinion'].value )
      .subscribe((res:any)=>{})
    }    
  }

  downloadPDF(){
    console.log(this.patient.Ask2MeReportPath);    
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
