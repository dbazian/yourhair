import {
  LAST_NAME_ASCENDING,
  LAST_NAME_DESCENDING,
  CITY_ASCENDING,
  CITY_DESCENDING,
} from "../actions/clientSortActions";
import { GET_CLIENTS } from "../actions/clientListActions";

const initialState = {
  clientList: [],
  filteredList: [],
};

const clientSortReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLIENTS:
      return {
        clientList: action.clients,
      };
    case LAST_NAME_ASCENDING:
      state.filteredList = state.clientList.sort((a, b) => {
        let la = a.lastName.toLowerCase();
        let lb = b.lastName.toLowerCase();
        if (la > lb) {
          return -1;
        }
        if (la < lb) {
          return 1;
        }
        return 0;
      });
    case LAST_NAME_DESCENDING:
      state.filteredList = state.clientList.sort((a, b) => {
        console.log(a.lastName);
        let la = a.lastName.toLowerCase();
        let lb = b.lastName.toLowerCase();
        if (la < lb) {
          return -1;
        }
        if (la > lb) {
          return 1;
        }
      });
    default:
      return state;
  }
};

export default clientSortReducers;
