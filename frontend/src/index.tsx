import React from 'react';
import ReactDOM from 'react-dom/client';
import {OidcProvider} from "@axa-fr/react-oidc";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
const { REACT_APP_AUTHORITY } = process.env;

const oidcConfig = {
    authority: REACT_APP_AUTHORITY as string,
    client_id: "oidc-client-practice",
    redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/callback`,
    scope: 'profile email openid roles',
};

root.render(
  <OidcProvider configuration={oidcConfig}>
    <App />
  </OidcProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
