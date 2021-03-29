import React, { useState } from 'react';
import { serverStem } from '../../config';
import { useAuth0 } from '@auth0/auth0-react';
import { FormMessage } from './';

const FormPost = (props) => {
  const [isSuccess, setIsSuccess] = useState(null);
  const [isError, setIsError] = useState(null); 
  const [message, setMessage] = useState(null);
  const serverUrl = `${serverStem}${props.action}`;
  const { getAccessTokenSilently } = useAuth0();

  const postApi = async (e) => {
    e.preventDefault();
    const form = e.target;
    const fields = Array.from(form.querySelectorAll('.input__field'));
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
          'Content-Type': `${props.enctype}`          
        },
        body: JSON.stringify(collectedFields)
      });

      const response = await fetch(request);
      const responseData = await response.json();
      const { message } = responseData;

      console.log(responseData);
      setMessage(message);
      form.reset();

    } catch(err) {
      console.log(err);
    }

  }

  return ( 
    <form 
      onSubmit={postApi}
    >
      {message && <FormMessage>{message}</FormMessage>}
      <fieldset>
        <legend>{props.title}</legend>
        {props.children}
      </fieldset>
      
    </form>
   );
}
 
export default FormPost;