import { Component, OnInit } from '@angular/core';
import { FlightInspirationService } from 'src/app/service/flight-inspiration.service';
import { Store } from '@ngrx/store';
import { AppState, selectDestinations } from 'src/app/ngrx/state';
import { Observable } from 'rxjs';
import { FlightInpirationResponse, FlightInpirationRecord } from 'src/app/models/flight-inpiration-response';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  _destinations$: Observable<FlightInpirationResponse>;
  _destinations: FlightInpirationRecord[] = [];

  constructor(private store: Store<AppState>) { 
    this._destinations$ = this.store.select(selectDestinations);
  }

  ngOnInit(): void {
    this._destinations$.subscribe(res => {
      this._destinations = res?.data;
    });
  }

}
