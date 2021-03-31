import React, { useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { serverStem } from './../../config';
import { useAuth0 } from '@auth0/auth0-react';

const FormPost = (props) => {
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState(null);
  const serverUrl = `${serverStem}${props.action}`;
  const { getAccessTokenSilently } = useAuth0();
  const history = useHistory();

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
      const { project: item, success, message } = responseData;

      if(!response.ok) {
        throw Error('Could not post data.');                    
      } else if(!success) {
        throw Error(message);
      }

      console.log(responseData);

      setMessage(message);
      setStatus('success');
      form.reset();
      history.push(`${props.target}/${item._id}/detail`)

    } catch(err) {
      setMessage(err.message);
      setStatus('error');
      setTimeout(() => {
        setStatus(null);
        setMessage(null);
      }, 2000);      
      console.log(err);
    }

  }

  return ( 
    <form 
      onSubmit={postApi}
    >      
      <fieldset>
        <legend>{props.title}</legend>
        {props.children}
      </fieldset>
      
    </form>
   );
}
 
export default FormPost;