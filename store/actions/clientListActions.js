export const GET_CLIENTS = "GET_CLIENTS";
export const REMOVE_CLIENT = "REMOVE_CLIENT";
export const ADD_CLIENT = "ADD_CLIENT";
export const UPDATE_CLIENT = "UPDATE_CLIENT";

export const getClients = () => {
  return {
    type: GET_CLIENTS,
  };
};

export const removeClient = () => {
  return {
    type: REMOVE_CLIENT,
  };
};

export const addClient = (clientList) => {
  console.log(clientList);
};

export const updateClient = () => {
  return {
    type: UPDATE_CLIENT,
  };
};
