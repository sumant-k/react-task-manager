import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./redux/redux-reducers/rootReducer";
import rootSaga from "./redux/redux-saga/rootSaga";
import { composeWithDevTools } from "redux-devtools-extension";

const reduxComposeEnhancer = composeWithDevTools({
  trace: true,
  traceLimit: 25,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  reduxComposeEnhancer(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Task this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
