import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AskAnythingService } from '../../../../core/services/askAnything.service';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  questionForm: FormGroup;
  constructor(
    private auth: AskAnythingService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<QuestionComponent>,
  ) { }

  ngOnInit() {
    this.questionForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required)
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  askquestions(question){
    if(this.questionForm.valid) {
      this.auth.askquestion(question.value).subscribe();
      console.log(question.value);
    }
  }
}
