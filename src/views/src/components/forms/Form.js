import React, { useContext } from 'react';
import { FormContext } from './../../contexts';
import { useAuth0 } from '@auth0/auth0-react';


const FormPost = (props) => {
  const { serverStem } = useContext(FormContext);
  const { getAccessTokenSilently } = useAuth0();
  const {
    action, 
    children,
    method,
    name,
    size, 
    title
  } = props;

  const serverUrl = `${serverStem}${action}`;


  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const fields = Array.from(form.querySelectorAll('.field__content'));
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
        method: method,
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
    
    <form 
      onSubmit={handleSubmit}
      className={`form form--${size}`}
      action={action}
      method={method}
      name={name}
      autoComplete="off"
    >      
      <fieldset className="form__border">
        <legend className="form__title">{title}</legend>
        {children}
      </fieldset>
      
    </form>
   );
}
 
export default FormPost;