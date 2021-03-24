import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import "./app.css";

const App = () => {

  const { isLoading } = useAuth0();

  if(isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <h1>sandbox fullstack</h1>
    </React.Fragment>
  );
};

export default App;
