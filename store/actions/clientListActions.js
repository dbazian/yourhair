export const GET_CLIENTS = "GET_CLIENTS";
export const REMOVE_CLIENT = "REMOVE_CLIENT";
export const ADD_CLIENT = "ADD_CLIENT";
export const UPDATE_CLIENT = "UPDATE_CLIENT";

export const getClients = () => {
  return {
    type: GET_CLIENTS,
  };
};

export const removeClients = () => {
  return {
    type: REMOVE_CLIENT,
  };
};

export const addClients = (firstName, lastName, address, city, phoneNumber, email) => {
  return {
    type: ADD_CLIENT,
    firstName,
    lastName,
    address,
    city,
    phonenUmber,
    email,
  };
};

export const updateClients = () => {
  return {
    type: UPDATE_CLIENT,
  };
};
