import axios from "axios";
import ClientModel from "../../models/ClientModel";

export const GET_CLIENTS = "GET_CLIENTS";
export const REMOVE_CLIENT = "REMOVE_CLIENT";
export const ADD_CLIENT = "ADD_CLIENT";
export const UPDATE_CLIENT = "UPDATE_CLIENT";

export const getClients = () => {
  return async (dispatch, getState) => {
    await axios
      .get("https://yourhaircalled.firebaseio.com/clients/.json")
      .then(response => {
        const resData = response.data;
        const loadedClients = [];
        for (const key in resData) {
          loadedClients.push(
            new ClientModel(
              key,
              resData[key].clientList.firstName,
              resData[key].clientList.lastName,
              resData[key].clientList.address,
              resData[key].clientList.city,
              resData[key].clientList.phoneNumber,
              resData[key].clientList.email
            )
          );
        }
        dispatch({ type: GET_CLIENTS, clients: loadedClients });
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("error", error.message);
        }
        throw error;
      });
  };
};

export const removeClient = client => {
  return async (dispatch, getState) => {
    await axios
      .delete(`https://yourhaircalled.firebaseio.com/clients/${client}.json`)
      .then(response => {
        alert("Client has been deleted");
      })

      .catch(error => {
        alert("There was an error");
        console.log(error);
      });
  };
};

export const addClient = clientList => {
  return async (dispatch, getState) => {
    await axios
      .post("https://yourhaircalled.firebaseio.com/clients/.json", {
        clientList,
      })
      .then(response => {
        alert("Client Added!");
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const updateClient = () => {
  return {
    type: UPDATE_CLIENT,
  };
};
