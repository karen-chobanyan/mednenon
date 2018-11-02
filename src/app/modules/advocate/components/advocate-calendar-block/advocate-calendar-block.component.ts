import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxCalendarComponent, IgxDialogComponent } from "igniteui-angular";

@Component({
  selector: 'app-advocate-calendar-block',
  templateUrl: './advocate-calendar-block.component.html',
  styleUrls: ['./advocate-calendar-block.component.css']
})
export class AdvocateCalendarBlockComponent implements OnInit {
  @ViewChild("calendar") public calendar: IgxCalendarComponent;
  @ViewChild("alert") public dialog: IgxDialogComponent;

  public formatOptions: any;
  public formatViews: any;
  public select: HTMLSelectElement;
  public locale: string;
  constructor() { }

  ngOnInit() {
    this.formatOptions = { day: "2-digit", month: "long", weekday: "long", year: "numeric" };
    this.formatViews = { day: true, month: true, year: true };
    this.select = document.getElementById("locations") as HTMLSelectElement;
  }
  public verifyRange(dates: Date[]) {
    if (dates.length > 5) {
      this.calendar.selectDate(dates[0]);
      this.dialog.open();
    }
  }
}
