export const GET_CLIENTS = "GET_CLIENTS";
export const REMOVE_CLIENTS = "REMOVE_CLIENTS";
export const ADD_CLIENTS = "ADD_CLIENTS";
export const UPDATE_CLIENTS = "UPDATE_CLIENTS";

export const getClients = () => {
  return {
    type: GET_CLIENTS,
  };
};

export const removeClients = () => {
  return {
    type: REMOVE_CLIENTS,
  };
};

export const addClients = () => {
  return {
    type: ADD_CLIENTS,
  };
};

export const updateClients = () => {
  return {
    type: UPDATE_CLIENTS,
  };
};
