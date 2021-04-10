import React, { useContext, useEffect, useState } from 'react';
import { FormContext } from './../../contexts';

const TextArea = (props) => {
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
      <span>{props.title}</span>
      <textarea
        className="field"
        type="text"
        name={props.title}
        id={props.title}
        value={fieldValue}
        onChange={(e) => setFieldValue(e.target.value)}
      ></textarea>      
    </label>
   );
}
 
export default TextArea;