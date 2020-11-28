import {
  LAST_APPOINTMENT_ASCENDING,
  LAST_APPOINTMENT_DESCENDING,
  LAST_NAME_ASCENDING,
  LAST_NAME_DESCENDING,
  CITY_ASCENDING,
  CITYDESCENDING,
} from "../actions/clientSortActions";

const initialState = {
  clientList: [],
  filteredList: [],
};

const clientSortReducers = (state = initialState, action) => {
  switch (action.type) {
    case LAST_NAME_ASCENDING:
      state.filteredList = state.clientList.sort((a, b) => {
        a = new Date(a.lastAppointment);
        b = new Date(b.lastAppointment);
        return a - b;
      });
    case LAST_NAME_DESCENDING:
      state.filteredList = state.clientList.sort((a, b) => {
        a = new Date(a.lastAppointment);
        b = new Date(b.lastAppointment);
        return b - a;
      });
    default:
      return state;
  }
};

export default clientSortReducers;
