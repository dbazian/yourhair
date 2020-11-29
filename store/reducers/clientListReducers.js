import { GET_CLIENTS, DELETE_CLIENT, ADD_CLIENT, UPDATE_CLIENT } from "../actions/clientListActions";

const initialState = {
  clientList: [],
};

const clientListReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLIENTS:
      console.log("client reducer");
      console.log(action.clients);
      return {
        clientList: action.clients,
      };
    case DELETE_CLIENT:
      return;
    case ADD_CLIENT:
      return;
    case UPDATE_CLIENT:
      return;
    default:
      return state;
  }
};

export default clientListReducers;
