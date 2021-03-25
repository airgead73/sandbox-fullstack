import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import "./app.css";
import Layout from "./layout";

const App = () => {

  const { isLoading } = useAuth0();

  if(isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <Layout/>
    </React.Fragment>
  );
};

export default App;
