import React, { useState } from 'react';
import { serverStem } from '../../config';
import { useAuth0 } from '@auth0/auth0-react';

const FormPost = (props) => {  
  const serverUrl = `${serverStem}${props.action}`;
  const { getAccessTokenSilently } = useAuth0();

  const postSecure = async (e) => {

    e.preventDefault();    

    const form = e.target;
    const fields = Array.from(form.querySelectorAll('input__field'));
    const collectedFields = {};

    fields.forEach((field) => {
      collectedFields[field.name] = field.value;
    });

    try {

      const token = await getAccessTokenSilently();
      const request = new Request(serverUrl, {
        method: `${props.method}`,
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
      <fieldset>
        <legend>{props.title}</legend>
        {props.children}
      </fieldset>
      
    </form>
   );
}
 
export default FormPost;