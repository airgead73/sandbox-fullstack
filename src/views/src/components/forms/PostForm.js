import React, { useState } from 'react';
import { serverStem } from '../../config';
import { useAuth0 } from '@auth0/auth0-react';

const PostForm = (props) => {  
  const [status, setStatus] = useState('initial');
  const serverUrl = `${serverStem}${props.endpoint}`;
  const { getAccessTokenSilently } = useAuth0();

  const changeStatus = (newStatus) => {

    setStatus(newStatus);
    
  }

  const postSecure = async (e) => {

    e.preventDefault();    

    const form = e.target;
    const fields = Array.from(form.querySelectorAll('.field__content'));
    const collectedFields = {};

    fields.forEach((field) => {
      collectedFields[field.name] = field.value;
    });

    try {

      const token = await getAccessTokenSilently();
      const request = new Request(serverUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(collectedFields)       
      });
      const response = await fetch(request);
      const responseData = await response.json();

      console.log(responseData);
      changeStatus('submitted');

    } catch(err) {

      console.log(err);

    }

  }


  return ( 
    <form 
      onSubmit={(e) => postSecure(e)}
      status={status}
    >
  
      {props.children}
      
    </form>
   );
}
 
export default PostForm;