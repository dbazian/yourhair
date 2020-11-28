import * as React from "react";
import Navigation from "./navigation/Navigation";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import clientSortReducers from "./store/reducers/clientSortReducers";
import clientListReducers from "./store/reducers/clientListReducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  clientSort: clientSortReducers,
  clientList: clientListReducers,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
