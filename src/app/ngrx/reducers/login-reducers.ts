import { LoginState,  initialLoginState } from '../state';
import { LoginActionTypes, LoginActionData } from '../actions/login.action';


export function LoginReducer(state: LoginState = initialLoginState, action: LoginActionData): LoginState {
  switch (action.type) {
    case LoginActionTypes.LoggedIn:
      return {
        loggedIn: action.payload.loggedIn,
        userDetails: action.payload.userDetails,
        error: null
      };
    
    case LoginActionTypes.LoginError:
        return{
            loggedIn: false,
            userDetails: null,
            error: "Failed to Authenticate User"
        }

    default:
      return state;
  }
}
