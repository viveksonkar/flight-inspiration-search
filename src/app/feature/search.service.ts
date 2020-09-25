import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from '../models/city.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  origin: City;
  departureDate: moment.Moment;
  oneWay: boolean;
  maxPrice: number;

  constructor(private _http: HttpClient) { }
  
}
