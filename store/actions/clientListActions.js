import axios from "axios";

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
  return async (dispatch, getState) => {
    await axios
      .post("https://yourhaircalled.firebaseio.com/clients/.json", {
        clientList,
      })
      .then((response) => {
        alert("Client Has Been Added");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const updateClient = () => {
  return {
    type: UPDATE_CLIENT,
  };
};
