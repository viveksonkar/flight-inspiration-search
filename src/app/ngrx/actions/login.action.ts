import { Action } from '@ngrx/store/ngrx-store';
import { UserDetails } from 'src/app/models/user-details.model';


export enum LoginActionTypes{
  LogIn = '[LogIn] Sign In',
  LoggedIn = '[LoggedIn] Login success',
  LoginError = '[Login] Login error'
}

export class LoginActionData implements Action {
  type: string;
  payload: {
    loggedIn: boolean,
    userDetails: UserDetails,
    error: string
  };
}

export class LogInUser implements Action {
  readonly type = LoginActionTypes.LogIn;

  constructor() {
  }
}

export class UserLoggedIn implements Action {
  readonly type = LoginActionTypes.LoggedIn;

  constructor(readonly payload: { loggedIn: boolean, userDetails: UserDetails }) {
  }
}

export class UserLogInError implements Action {
  readonly type = LoginActionTypes.LoginError;

  constructor(readonly payload: { error: string }) {

  }
}

export type LoginAction = LogInUser | UserLoggedIn | UserLogInError;
