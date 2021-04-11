import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';
import { serverStem } from './../../config';

const BtnDelete = ({endpoint, to, children}) => {
  const { getAccessTokenSilently } = useAuth0();
  const serverUrl = serverStem + endpoint;
  const history = useHistory();

  const handleDelete = async () => {
    try {

      const token = await getAccessTokenSilently();
      const request = new Request(serverUrl, {
        method: "DELETE",
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': "application/json"          
        },
      });

      const response = await fetch(request);
      const responseData = await response.json();
      const { success } = responseData;

      if(success && to) {
        history.push(`${to}`)
      } else if (success) {
        window.location.reload();
      } else {
        throw Error('something went wrong')
      }

    } catch(err) {
      console.error(err);
    }
  }

  return ( 
    <button onClick={handleDelete}>
      {children}
    </button>
   );
}
 
export default BtnDelete;