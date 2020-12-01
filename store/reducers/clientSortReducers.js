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

    case LAST_NAME_DESCENDING:
      newFilteredList = state.clientList.sort((a, b) => {
        let la = a.lastName.toLowerCase();
        let lb = b.lastName.toLowerCase();
        if (la < lb) {
          return -1;
        }
        if (la < lb) {
          return 1;
        }
      });
      return {
        ...state,
        filteredList: newFilteredList,
      };

    case LAST_NAME_ASCENDING:
      newFilteredList = state.clientList
        .sort((a, b) => {
          let la = a.lastName.toLowerCase();
          let lb = b.lastName.toLowerCase();
          if (lb > la) {
            return -1;
          }
          if (lb > la) {
            return 1;
          }
          return 0;
        })
        .reverse();
      return {
        ...state,
        filteredList: newFilteredList,
      };
    default:
      return state;
  }
};

export default clientSortReducers;
