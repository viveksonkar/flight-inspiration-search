import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../search.service';
import { FlightInspirationService } from 'src/app/service/flight-inspiration.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/ngrx/state';
import { DestinationLoadComplete } from 'src/app/ngrx/actions/destinations.action';

@Component({
  selector: 'app-search-option',
  templateUrl: './search-option.component.html',
  styleUrls: ['./search-option.component.scss']
})
export class SearchOptionComponent implements OnInit {

  constructor(private searchService: SearchService, 
    private flightInspirationService: FlightInspirationService,
    private store: Store<AppState>) { }

  ngOnInit(): void {
    
  }

  search(){
    this.flightInspirationService.multiparameterSearch(this.searchService.origin?.code,
      this.searchService.departureDate, this.searchService.oneWay, this.searchService.maxPrice).subscribe( response => {
        this.store.dispatch(new DestinationLoadComplete({ destinations: response }));
      });
  }

}
