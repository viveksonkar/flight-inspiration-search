import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlightInpirationResponse } from '../models/flight-inpiration-response';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { APP_DATE_FORMAT } from '../app-date-format';

@Injectable({
  providedIn: 'root'
})
export class FlightInspirationService {

  localUrl: string = './mock/insipiration-search.json';

  constructor(private _http: HttpClient) { }

  /**
   * exploreDestinationsForOrigin- Service call to flight-inspiration-search API
   *  the service is invoked from OriginEffect once Origin is Selected
   * @param origin 
   */
  exploreDestinationsForOrigin(origin: string): Observable<FlightInpirationResponse>{
    // Commenting as InspirationService is returning 500 currently. On 23-September it was working fine
    /* return this._http.get<FlightInpirationResponse>(`${environment.flightInspirationSearch}?origin=${origin}`)
      .pipe(map(response => response)); */
      return this._http.get<FlightInpirationResponse>(environment.flightInspirationSearch)
      .pipe(map(response => response)); 
  }

  /**
   * multiparameterSearch - for filtered search
   * @param origin 
   * @param departureDate 
   * @param oneWay 
   * @param maxPrice 
   */
  multiparameterSearch(origin: string, departureDate: moment.Moment, oneWay: boolean, maxPrice: number): Observable<FlightInpirationResponse>{
      return this._http.get<FlightInpirationResponse>(`${environment.flightInspirationSearch}
            ?origin=${origin}&departureDate=${departureDate.format(APP_DATE_FORMAT.YYYYMMDD)}&oneWay=${oneWay}&maxPrice=${maxPrice}`)
      .pipe(map(response => response)); 
  }
}
