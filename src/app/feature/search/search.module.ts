import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchOptionComponent } from './search-option/search-option.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchComponent } from './search.component';

import { SearchRoutingModule } from './search-routing.module';
import { MatCardModule } from '@angular/material/card';
import { FlightInspirationService } from 'src/app/service/flight-inspiration.service';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { OriginComponent } from './form/origin/origin.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { DepartureDateComponent } from './form/departure-date/departure-date.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { JourneyTypeComponent } from './form/journey-type/journey-type.component';
import { MatSelectModule } from '@angular/material/select';
import { MaxPriceComponent } from './form/max-price/max-price.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [SearchOptionComponent, SearchResultComponent, SearchComponent, OriginComponent, FlightDetailsComponent, DepartureDateComponent, JourneyTypeComponent, MaxPriceComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatAutocompleteModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSelectModule,
    MatSliderModule,
    MatIconModule
  ],
  providers:[
    FlightInspirationService
  ],
  exports: [
    SearchOptionComponent, SearchResultComponent, SearchComponent
  ]
})
export class SearchModule { }
