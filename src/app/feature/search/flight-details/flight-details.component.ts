import { Component, OnInit, Input } from '@angular/core';
import { FlightInpirationRecord } from 'src/app/models/flight-inpiration-response';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss']
})
export class FlightDetailsComponent implements OnInit {

  @Input() flight: FlightInpirationRecord;
  
  constructor() { }

  ngOnInit(): void {
  }

}
