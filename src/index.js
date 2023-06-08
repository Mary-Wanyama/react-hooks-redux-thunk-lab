import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux"
import { createStore, applyMiddleware} from "redux"
import {thunk} from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import "bootstrap/dist/css/bootstrap.min.css";
import catsReducer from './features/cats/catsSlice.js'
import App fron "./App"

const store = createStore(catsReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById("root"));
