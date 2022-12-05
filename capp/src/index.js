import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-gw2poqqjpohfgzgt.uk.auth0.com"
    clientId="6WTSKI7oNZfcgpKzEh1YIKStj9Gz0MB3"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);