import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PatientService } from '../../../../core/services/patient.service';
import { PartnerService } from '../../../../core/services/partner.service';

@Component({
  selector: 'app-partner-new-request',
  templateUrl: './partner-new-request.component.html',
  styleUrls: ['./partner-new-request.component.css']
})
export class PartnerNewRequestComponent implements OnInit {
  newRequest: FormGroup;
  selected = 'option2';
  public startDate = new Date();
  public partner:any = [];
  public labReport: any = [];
  public attachments: any[] = [];
  public attachmentsNames = [];
  public genes = [];
  public surgeries = [];
  public cancers = [];

  constructor(
    private patient: PatientService,
    private partnerService: PartnerService
  ) {}

  ngOnInit() {
    this.newRequest = new FormGroup({
      FirstName:new FormControl('', Validators.required),
      LastName:new FormControl('', Validators.required),
      Gender: new FormControl('',Validators.required),
      Gene: new FormControl('', Validators.required),
      DOB:new FormControl('', Validators.required),
      Email:new FormControl('', Validators.email),
      Ethnicity:new FormControl(''),
      Surgeries: new FormControl(''),
      PriorCancer: new FormControl(''),
      SpecimenType: new FormControl(''),
      AnalysisDate: new FormControl(''),
      CollectionDate: new FormControl(''),
      attachmentNames: new FormControl()
    });

    this.partnerService.genes().subscribe((res: any) => {
      this.genes = res || [];
    });

    this.partnerService.surgeries().subscribe((res: any) => {
      this.surgeries = res || [];
    });

    this.partnerService.cancers().subscribe((res: any) => {
      this.cancers = res || [];
    });
  }

  addRequest(form){
    if(this.newRequest.valid){      
      this.patient.addPatient(form.value, this.labReport, this.attachments).subscribe(res => {  
        this.partner = res;       
        console.log(res);       
      });
      console.log(form.value); 
    }   
  }
  onDragStart(event, data) {
    event.dataTransfer.setData('data', data);
  }
  changeDate(e){
    console.log(e);    
  }

  labReportAttached(event) {
    const reader = new FileReader(); 
    if(event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      this.labReport= file;
    }
  }

  attachmentsAdded(event) {
    const reader = new FileReader(); 
    if(event.target.files && event.target.files.length) {
      const files = event.target.files;
      for (let i = 0; i < event.target.files.length; i++){
        this.attachmentsNames.push(files[i].name);
        this.attachments.push(files[i]);
      }
      this.newRequest.get('attachmentNames').patchValue(this.attachmentsNames);
    }
  }

  deleteFile () {
    this.labReport = {};
    
  }
  
  deleteFiles (i) {
    this.attachmentsNames.splice(i, 1);
    this.attachments.splice(i, 1);
  }
}
