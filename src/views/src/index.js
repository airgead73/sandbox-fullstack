import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth-provider-withhistory";
import { MessageProvider } from './contexts';
import "./main.css";

ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory>  
      <MessageProvider>
        <App />    
      </MessageProvider>
    </Auth0ProviderWithHistory>
    
  </Router>,
  document.getElementById("root")
);


