import React, { useState, useContext } from 'react';
import { serverStem } from '../../config';
import { useAuth0 } from '@auth0/auth0-react';

import { 
  TextInput, 
  TextArea, 
  NumberInput, 
  Submit 
} from '../../components/forms';


const AddForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const serverUrl = serverStem + '/api/projects';
  const { getAccessTokenSilently } = useAuth0();


  const postSecure = async (e) => {
    e.preventDefault();
    const form = e.target;
    const fields = Array.from(form.querySelectorAll('.field__content'));
    const collectedFields = {}

    fields.forEach((field) => {
      collectedFields[field.name] = field.value;      
    });  

    try {

      const token = await getAccessTokenSilently();
      const response = await fetch(serverUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(collectedFields)
        
      });

      const responseData = await response.json();

      console.log(responseData);

    } catch(err) {
      console.log(err)
    }

  }



  

  return ( 
    <React.Fragment>

      {/* {error && <p>{error}</p>}
      {isLoading && <p>project is being submitted...</p>} */}

    <form className="form" onSubmit={(e) => postSecure(e)}>
      <fieldset className="form__fieldset">
        <legend>add project</legend>
        <TextInput submitted={isSubmitted} inputTitle="title" placeholder="enter project's title"/>
        <TextInput submitted={isSubmitted} inputTitle="code" placeholder="enter project's code"/>
        <TextInput submitted={isSubmitted} inputTitle="author" placeholder="Last name, First name"/>
        <NumberInput submitted={isSubmitted} inputTitle="edition" placeholder="enter project's edition"/>
        <TextInput submitted={isSubmitted} inputTitle="client" placeholder="enter project's client"/>
        <TextArea submitted={isSubmitted} inputTitle="notes" placeholder="notes..."/>
        <Submit label="add"/>
      </fieldset>
    </form>
    </React.Fragment>
   );
}
 
export default AddForm;