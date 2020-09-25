import { Injectable } from '@angular/core';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/authorization/auth.service';
import { LoginActionTypes, LoginActionData, UserLogInError, UserLoggedIn } from '../actions/login.action';
import { of } from 'rxjs';
import { OriginActionData, OriginActionTypes } from '../actions/origin.action';
import { FlightInspirationService } from 'src/app/service/flight-inspiration.service';
import { DestinationLoadComplete, DestinationLoadError } from '../actions/destinations.action';

@Injectable()
export class OriginEffects {

  constructor(private actions$: Actions, private flightInspirationService: FlightInspirationService) { }
  
  @Effect()
  originData$ = this.actions$.pipe(
      ofType<OriginActionData>(OriginActionTypes.OriginSelected),
      mergeMap((action) => this.flightInspirationService.exploreDestinationsForOrigin(action.payload.origin.code)
        .pipe(
          map( data => {
            return (new DestinationLoadComplete({ destinations: data }));
          }),
          catchError((errorMessage) => of(new DestinationLoadError({ error: errorMessage })))
        ))
    );

}
