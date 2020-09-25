import { Component, OnInit, Input } from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import * as _moment from 'moment';
import { DATE_FORMATS } from 'src/app/app-date-format';
import { SearchService } from 'src/app/feature/search.service';

@Component({
  selector: 'app-departure-date',
  templateUrl: './departure-date.component.html',
  styleUrls: ['./departure-date.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS},
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}
  ]
})
export class DepartureDateComponent implements OnInit {

  @Input() selected: _moment.Moment;
  @Input() minDate: _moment.Moment;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  /**
   * onSelected() - Method which emits the date on selection
   * @param event
   */
  onSelected(event: _moment.Moment) {
    this.selected = event;
    this.searchService.departureDate = this.selected;
  }

}
