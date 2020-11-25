import * as React from "react";
import Navigation from "./navigation/Navigation";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import clientSortReducers from "./store/reducers/clientSortReducers";

const rootReducer = combineReducers({
  clientData: clientSortReducers,
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
