import React, { useContext, useEffect, useState } from 'react';
import { FormContext } from './../../contexts';

const InputText = (props) => {
  const { formStatus } = useContext(FormContext);
  const [fieldValue, setFieldValue] = useState('');

  useEffect(() => {

    if(formStatus === 'success') {
      setFieldValue('');
    }

  },[formStatus]);
  
  return ( 
    <label 
      htmlFor={props.title}
      >
      <input 
        type="text"
        name={props.title}
        id={props.title}
        value={fieldValue}
      />
    </label>
   );
}
 
export default InputText;