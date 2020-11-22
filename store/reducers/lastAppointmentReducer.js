import { FILTER_LAST_APPOINTMENT } from "../actions/lastAppointmentActions";
import clientList from "../../data/clientList";

const initialState = {
  clientList: clientList,
  filteredList: [],
};

const filterByAppointment = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_LAST_APPOINTMENT:
      return {};
    default:
      return state;
  }
};
export default lastAppointmentReducer;
