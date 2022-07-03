import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers";
import ThunkMiddleware from "redux-thunk";

const middlewareEnchaner = applyMiddleware(ThunkMiddleware);

const store = createStore(rootReducer, middlewareEnchaner);
// console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
