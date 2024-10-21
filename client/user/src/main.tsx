// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/config";
import { Provider } from "react-redux";
import AuthProvider from './context/AuthProvider'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <BrowserRouter>
      <Provider store={store}>
        {/* <React.StrictMode> */}
        <App />
        {/* </React.StrictMode>  */}
      </Provider>
    </BrowserRouter>
  </AuthProvider>
);
