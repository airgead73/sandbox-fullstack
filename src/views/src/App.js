import React from 'react';
import { FetchProvider } from './contexts/FetchContext';

function App() {  

  const { isLoading } = useAuth0();

  if(isLoading) {
    return <div>Loading...</div>;
  }

  return (
    
    <FetchProvider>
      <h1>application</h1>
    </FetchProvider>
  
  );

}

export default App;
