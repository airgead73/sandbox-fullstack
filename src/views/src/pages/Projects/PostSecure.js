import React, { useState } from 'react';
import { serverStem } from '../../config';
import { useAuth0 } from '@auth0/auth0-react';

import { 
  TextInput, 
  TextArea, 
  NumberInput, 
  Submit 
} from '../../components/forms';


const PostSecure = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const serverUrl = serverStem + '/api/projects';
  const { getAccessTokenSilently } = useAuth0();


  const postItem = async (e) => {
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

    <form className="form" onSubmit={(e) => postItem(e)}>
      {children}
    </form>
    </React.Fragment>
   );
}
 
export default AddForm;