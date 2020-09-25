import { OriginState, initialOriginState } from '../state';
import { OriginActionData, OriginActionTypes } from '../actions/origin.action';

export function OriginReducer(state: OriginState = initialOriginState, action: OriginActionData): OriginState {
  switch (action.type) {
    case OriginActionTypes.OriginSelected:
      return {
        origin: action.payload.origin,
        error: null
      };
    
      case OriginActionTypes.OriginError:
          return{
              origin: null,
              error: "Failed to Select origin"
          }

    default:
      return state;
  }
}
