import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FormContext } from './../../contexts';
import { useAuth0 } from '@auth0/auth0-react';

const Form = (props) => {
  const { serverStem } = useContext(FormContext);
  const { getAccessTokenSilently } = useAuth0();
  const serverUrl = `${serverStem}${props.action}`;
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const fields = Array.from(form.querySelectorAll('input'));
    const collectedFields = {};

    // compile field values
    fields.forEach((field) => {
      console.log(field.type);
      if(field.type === "file") {
        collectedFields.data_url = field.getAttribute("previewsrc");
        collectedFields.filename = field.getAttribute("filename");
      } else {
        collectedFields[field.name] = field.value;
      }      
      
    });

    console.log(collectedFields); 

    try {

      const token = await getAccessTokenSilently();
      const request = new Request(serverUrl, {
        method: props.method,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': "application/json"          
        },
        body: JSON.stringify(collectedFields)
      });

      const response = await fetch(request);
      const responseData = await response.json();
      console.log(responseData);

    } catch(err) {
      console.error(err);
    } 
  }
  return ( 
    <form onSubmit={}>
      <legend>{props.title}</legend>
      {props.children}
    </form>
   );
}
 
export default Form;