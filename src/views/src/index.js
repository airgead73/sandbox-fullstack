import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth-provider-withhistory";
import { LayoutProvider, FormProvider } from './contexts';
import "./main.css";

ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory>
      <LayoutProvider>
        <FormProvider>
          <App />
        </FormProvider>
      </LayoutProvider>      
    </Auth0ProviderWithHistory>
    
  </Router>,
  document.getElementById("root")
);


