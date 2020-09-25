import { DestinationsState, initialDestinationsState } from '../state';
import { DestinationsActionData, DestinationsActionTypes } from '../actions/destinations.action';


export function DestinationsReducer(state: DestinationsState = initialDestinationsState, action: DestinationsActionData): DestinationsState {
  switch (action.type) {
    case DestinationsActionTypes.DestinationLoaded:
      return {
        destinations: action.payload.destinations,
        error: null
      };
    
      case DestinationsActionTypes.DestinationError:
          return{
            destinations: null,
            error: "Failed to load destinations"
          }

    default:
      return state;
  }
}
