import { Injectable } from '@angular/core';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/authorization/auth.service';
import { LoginActionTypes, LoginActionData, UserLogInError, UserLoggedIn } from '../actions/login.action';
import { of } from 'rxjs';
import { UserDetails } from 'src/app/models/user-details.model';

@Injectable()
export class LoginEffects {

  constructor(private actions$: Actions, private _auth: AuthService) { }
  
  @Effect()
  loginUserData$ = this.actions$.pipe(
      ofType<LoginActionData>(LoginActionTypes.LogIn),
      mergeMap((action) => this._auth.retrieveToken()
        .pipe(
          map( data => {
            let userDetails: UserDetails = this._auth.saveToken(data);
            return (new UserLoggedIn({ loggedIn: true, userDetails: userDetails }));
          }),
          catchError((errorMessage) => of(new UserLogInError({ error: errorMessage })))
        ))
    );

}
