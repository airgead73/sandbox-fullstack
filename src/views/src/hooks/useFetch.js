import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { serverStem } from '../config';

const useGet = (endpoint) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { getAccessTokenSilently } = useAuth0();  

  const serverUrl = serverStem + endpoint;

  const callApi = async () => {
    try {

      const token = await getAccessTokenSilently();

      const response = await fetch(serverUrl, {
        headers: {
          Authorization: `Bearer ${token}`
        }        
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

export default useGet;