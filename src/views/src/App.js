import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

function App() { 

  const { isLoading } = useAuth0();

  if(isLoading) {
    return <div>loading...</div>
  }

  return (    

    <h1>portfolio application</h1>  

  );

}

export default App;
