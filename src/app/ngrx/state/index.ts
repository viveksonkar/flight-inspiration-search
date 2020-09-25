import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { LoginReducer } from '../reducers/login-reducers';
import { City } from 'src/app/models/city.model';
import { FlightInpirationResponse } from 'src/app/models/flight-inpiration-response';
import { OriginReducer } from '../reducers/origin-reducers';
import { DestinationsReducer } from '../reducers/destinations-reducers';
import { UserDetails } from 'src/app/models/user-details.model';


export interface AppState {
  logInState: LoginState,
  originState: OriginState,
  destinationsState: DestinationsState
}

export interface LoginState{
  loggedIn: boolean | null,
  userDetails: UserDetails | null,
  error: string | null
}

export const initialLoginState: LoginState = {
  loggedIn: false,
  userDetails: null,
  error: null
}

export interface OriginState {
  origin: City | null,
  error: string | null
}

export const initialOriginState: OriginState = {
  origin: null,
  error: null
}

export interface DestinationsState{
  destinations: FlightInpirationResponse | null,
  error: string | null
}

export const initialDestinationsState: DestinationsState = {
  destinations: null,
  error: null
}

export const reducers: ActionReducerMap<AppState> = {
  logInState: LoginReducer,
  originState: OriginReducer,
  destinationsState: DestinationsReducer
};

export const selectLogin = (state: AppState) => state.logInState.loggedIn;
export const selectUser = (state: AppState) => state.logInState.userDetails;
export const selectDestinations = (state: AppState) => state.destinationsState.destinations;

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];