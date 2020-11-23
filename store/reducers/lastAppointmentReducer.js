import { FILTER_LAST_APPOINTMENT } from "../actions/lastAppointmentActions";
import clientList from "../../data/clientList";

const initialState = {
  clientList: clientList,
  filteredList: [],
};

const filterLastAppointment = (state = initialState, action) => {
  console.log("reducer");
  console.log(action.order);
  switch (action.type) {
    case FILTER_LAST_APPOINTMENT:
      if (action.order === "Ascending") {
        state.filteredList = state.clientList.sort((a, b) => {
          a = new Date(a.lastAppointment);
          b = new Date(b.lastAppointment);
          return a - b;
        });
      } else if (action.order === "Descending") {
        state.filteredList = state.clientList.sort((a, b) => {
          a = new Date(a.lastAppointment);
          b = new Date(b.lastAppointment);
          return b - a;
        });
      }
    default:
      return state;
  }
};
export default filterLastAppointment;
