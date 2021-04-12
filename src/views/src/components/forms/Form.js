import React, { useContext } from 'react';
import { FormContext } from './../../contexts';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Form = (props) => {
  const { serverStem, changeFormStatus } = useContext(FormContext);
  const { getAccessTokenSilently } = useAuth0();
  const serverUrl = `${serverStem}${props.action}`;
  const history = useHistory();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const fields = Array.from(form.querySelectorAll('.field'));
    const collectedFields = {};

    // compile field values
    fields.forEach((field) => {
      if(field.type === "file") {
        collectedFields.data_url = field.getAttribute("previewsrc");
        collectedFields.filename = field.getAttribute("filename");
      } else {
        collectedFields[field.name] = field.value;
      }      
      
    });


    // fetch data

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
      
      // handle success
          
      if(props.to) return history.push(`${props.to}`);
      return changeFormStatus('success');

    } catch(err) {
      console.error(err);
    } 

  }

  return ( 
    <form onSubmit={(e) => handleSubmit(e)}>
      <fieldset>
        <legend>{props.title}</legend>
        {props.children}
      </fieldset>
    </form>
   );
}
 
export default Form;