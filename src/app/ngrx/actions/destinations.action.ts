import { Action } from '@ngrx/store/ngrx-store';
import { FlightInpirationResponse } from 'src/app/models/flight-inpiration-response';


export enum DestinationsActionTypes{
  DestinationLoaded = '[DestinationLoaded] DestinationLoad success',
  DestinationError = '[DestinationError] Destination error',
}

export class DestinationsActionData implements Action {
  type: string;
  payload: {
    destinations: FlightInpirationResponse,
    error: string
  };
}

export class DestinationLoadComplete implements Action {
  readonly type = DestinationsActionTypes.DestinationLoaded;

  constructor(readonly payload: { destinations: FlightInpirationResponse }) {
  }
}

export class DestinationLoadError implements Action {
  readonly type = DestinationsActionTypes.DestinationError;

  constructor(readonly payload: { error: string }) {

  }
}

export type DestinationsAction = DestinationLoadComplete | DestinationLoadError;
