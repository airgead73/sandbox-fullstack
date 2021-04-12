import React, { useContext, useEffect, useState } from 'react';
import { FormContext } from './../../contexts';

const InputText = (props) => {
  const initialValue = props.default || '';
  const { formStatus } = useContext(FormContext);
  const [fieldValue, setFieldValue] = useState(initialValue);

  useEffect(() => { 
    
    console.log('form context');
    console.log('---------------');

    if(formStatus === 'success') {
      console.log('change to success');
      setFieldValue('');
    }

  },[formStatus]);
  
  return ( 
    <label 
      htmlFor={props.title}
      >
        <span>{props.title}</span>
      <input
        className="field" 
        type="text"
        name={props.title}
        id={props.title}
        value={fieldValue}
        onChange={(e) => setFieldValue(e.target.value)}
      />
    </label>
   );
}
 
export default InputText;