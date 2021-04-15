import { useState, useEffect, useCallback, useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { serverStem } from '../config';
import { MessageContext } from './../contexts';

const useGet = (endpoint) => {
  const [data, setData] = useState(null);
  const { handleMessage } = useContext(MessageContext);
  const { getAccessTokenSilently } = useAuth0();  

  const serverUrl = serverStem + endpoint;

  const callApi = useCallback( async function(getToken, url) {

    const abortController = new AbortController();

    handleMessage({
      message: 'projects loading',
      status: 'loading'
    });

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

      if(!success) {
        throw Error(message);
      } else if(!response.ok) {
        throw Error('Could not fetch data for this resource.');
      }

      handleMessage({
        message: '',
        status: 'inactive'
      });

      setData(results);

    } catch(err) {
      console.error(err);
    }

    return () => abortController.abort();

  },[]);

  useEffect(() => {

    callApi(getAccessTokenSilently, serverUrl);

  },[endpoint,getAccessTokenSilently,serverUrl, callApi]);  

  return { data }

}

export default useGet;