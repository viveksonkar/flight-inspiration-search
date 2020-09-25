import { Action } from '@ngrx/store/ngrx-store';
import { City } from 'src/app/models/city.model';


export enum OriginActionTypes{
  OriginSelected = '[Origin] Origin success',
  OriginError = '[Origin] Origin error'
}

export class OriginActionData implements Action {
  type: string;
  payload: {
    origin: City,
    error: string
  };
}

export class OriginSelected implements Action {
  readonly type = OriginActionTypes.OriginSelected;
  constructor(readonly payload: { origin: City }) {
  }
}

export class OriginError implements Action {
  readonly type = OriginActionTypes.OriginError;
  constructor(readonly payload: { error: string }) {
  }
}

export type OriginAction = OriginSelected | OriginError;
