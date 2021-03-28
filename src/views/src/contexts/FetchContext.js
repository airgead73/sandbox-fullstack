import React, { createContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { serverStem } from './../config';

const FetchContext = createContext();
const { Provider } = FetchContext;

const FetchProvider = ({children}) => {
  const { getAccessTokenSilently } = useAuth0();

  const getToken = async () => {

    try {

      const token = await getAccessTokenSilently();
      return token;

    } catch(err) {
      console.log(err);
    }

  }

  const authHeader = new Headers();
  
  authHeader.append('Authorization', `Bearer ${getToken()}`);


  return (
    <Provider
      value={{
        authHeader,
        serverStem
      }}
    >
      {children}
    </Provider>
  );

}

export { FetchContext, FetchProvider }