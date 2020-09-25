import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { City } from 'src/app/models/city.model';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { SearchService } from 'src/app/feature/search.service';
import { FlightInspirationService } from 'src/app/service/flight-inspiration.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/ngrx/state';
import { OriginSelected } from 'src/app/ngrx/actions/origin.action';

@Component({
  selector: 'app-origin',
  templateUrl: './origin.component.html',
  styleUrls: ['./origin.component.scss']
})
export class OriginComponent implements OnInit {

  myControl = new FormControl();
  options: City[] = [
    { code: 'MAD', name: 'Madrid', country: "Spain" },
    { code: "AGF", name: "Agen", country: "France" },
    { code: "AGR", name: "Agra", country: "India"},
    { code: "AJI", name: "Agri", country: "Turkey" },
    { code: "BQN", name: "Aguadilla", country: "USA"},
    { code: "AGU", name: "Aguascalientes", country: "Mexico"},
    { code: "AMD", name: "Ahmedabad", country: "India" },
    { code: "AWZ", name: "Ahwaz", country: "Iran" },
    { code: "QXB", name: "Aix-En-Provence", country: "France" },
    { code: "AXT", name: "Akita", country: "Japan" },
    { code: "CAK", name: "Akron/Canton", country: "USA" },
    { code: "AKU", name: "Aksu", country: "China" },
    { code: "PVK", name: "Aktion", country: "Greece" },

  ];
  filteredOptions: Observable<City[]>;
  
  constructor(private searchService: SearchService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  displayFn(city: City): string {
    return city && city.name ? `${city.code} - ${city.name}, ${city.country}` : '';
  }

  private _filter(name: string): City[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  originSelected( event: MatAutocompleteSelectedEvent){
    let selectedCity: City = event.option.value;
    this.searchService.origin = selectedCity;
    this.store.dispatch(new OriginSelected({origin: selectedCity}));
  }

}
