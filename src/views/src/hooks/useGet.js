import { useState, useEffect, useCallback } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { serverStem } from '../config';

const useGet = (endpoint) => {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { getAccessTokenSilently } = useAuth0();  

  const serverUrl = serverStem + endpoint;

  const callApi = useCallback( async function(getToken, url) {

    const abortController = new AbortController()

    try {

      const token = await getToken();

      const response = await fetch(url, {
        signal: abortController.signal,
        headers: {
          Authorization: `Bearer ${token}`
        }        
      });

      const responseData = await response.json();      

      const { success, message, results } = responseData;
      const resultsCount = results.length;

      if(!success) {
        throw Error(message);
      } else if(!response.ok) {
        throw Error('Could not fetch data for this resource.');
      }

      setData(results);
      setCount(resultsCount);
      setIsLoading(false);
      setError(null);

    } catch(err) {
      setError(err.message);
      setIsLoading(false);
    }

    return () => abortController.abort();

  },[]);

  useEffect(() => {

    callApi(getAccessTokenSilently, serverUrl);

  },[endpoint,getAccessTokenSilently,serverUrl, callApi]);  

  return { data, count, isLoading, error }

}

export default useGet;