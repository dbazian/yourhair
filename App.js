import * as React from "react";
import Navigation from "./navigation/Navigation";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import lastAppointmentReducer from "./store/reducers/lastAppointmentReducer";

const rootReducer = combineReducers({
  clientData: lastAppointmentReducer,
});
const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
