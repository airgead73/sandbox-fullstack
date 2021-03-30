import React from 'react';
import { useHistory } from 'react-router-dom';
import { serverStem } from '../../config';
import { useAuth0 } from '@auth0/auth0-react';

const BtnDelete = (props) => {
  const serverUrl = `${serverStem}${props.endpoint}`;
  const { getAccessTokenSilently } = useAuth0();
  const history = useHistory();

  const deleteItem = async (e) => {
    e.preventDefault();
    const button = e.target;
    const endpoint = button.getAttribute('endpoint');
    const serverUrl = serverStem + endpoint;
 
    try {

      const token = await getAccessTokenSilently();
      const request = new Request(serverUrl, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });

      const response = await fetch(request);
      const responseData = await response.json();
      const { success, message } = responseData;

      if(!response.ok) {
        throw Error('Could not post data.');                    
      } else if(!success) {
        throw Error(message);
      } else if(success) {
        console.log(responseData);
        history.push(`${props.return}`)
      }

    } catch(err) {
      console.log(err.message);
    }

  }

  return ( 
    <button
      type="button"
      item={props._id}
      endpoint={props.endpoint}
      onClick={deleteItem}
      return={props.return}
    >
      {props.title}
    </button>
   );
}
 
export default BtnDelete;