import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const usePost = (endpoint, body) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { getAccessTokenSilently } = useAuth0();  

  let serverUrl = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_SERVER_URL_DEV : process.env.REACT_APP_SERVER_URL;

  serverUrl = serverUrl + endpoint;

  const callApi = async () => {
    try {

      const token = await getAccessTokenSilently();

      const response = await fetch(serverUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        }, 
        body: JSON.stringify(body)       
      });

      const responseData = await response.json();      

      const { success, message, results } = responseData;

      if(!success) {
        throw Error(message);
      } else if(!response.ok) {
        throw Error('Could not fetch data for this resource.');
      }

      setData(results);
      setIsLoading(false);
      setError(null);

    } catch(err) {
      setError(err.message);
      setIsLoading(false);
    }
  }

  useEffect(() => {

    callApi();

  },[endpoint]);  

  return { data, isLoading, error }

}

export default usePost;