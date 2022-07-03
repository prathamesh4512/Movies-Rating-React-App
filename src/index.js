import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers";
import ThunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";

import "./index.css";
import App from "./components/App";

const middlewareEnchaner = applyMiddleware(ThunkMiddleware);

const store = createStore(rootReducer, middlewareEnchaner);
// console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
