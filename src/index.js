import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "@auth0/auth0-react";
import history from "./utils/history";
import { getConfig } from "./config";

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

// Please see https://auth0.github.io/auth0-react/interfaces/auth0_provider.auth0provideroptions.html
// for a full list of the available properties on the provider
const config = getConfig();

// REACT_APP_AUTH0_DOMAIN=live-from.us.auth0.com
// REACT_APP_AUTH0_CLIENT_ID=23PlMK9EFDLbO0bxIfKoYLr8M39qS78E
// domain: "mcafee-mpc.us.auth0.com",
// clientId: "Pb3dZk2z58fio3lSqH41Iau0eqTt0BoX",
const providerConfig = {
  domain: "live-from.us.auth0.com",
  clientId: "23PlMK9EFDLbO0bxIfKoYLr8M39qS78E",
  ...(config.audience ? { audience: config.audience } : null),
  redirectUri: window.location.origin,
  onRedirectCallback,
};

ReactDOM.render(
  <Auth0Provider {...providerConfig}>
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
