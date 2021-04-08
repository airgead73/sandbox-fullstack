import React, { useContext, useEffect, useState } from 'react';
import { FormContext } from './../../contexts';

const TextArea = (props) => {
  const { title } = props;
  const { formStatus } = useContext(FormContext);

  const [fieldValue, setFieldValue] = useState('');
  const [fieldStatus, setFieldStatus] = useState('initial');
  const [fieldMsg, setFieldMsg] = useState(null);

  useEffect(() => {

    if(formStatus === 'success') {
      setFieldValue('');
    }

  },[formStatus])  
  return ( 
    <label 
      htmlFor={title} 
      className="field" 
      data-status-form={formStatus}
      data-status-field={fieldStatus}
    >      
      <span className="field__title">{title}</span>
      <textarea 
        type="text"
        name={title}
        id={title}
        className="field__content field--textarea"
        value={fieldValue}
        onChange={(e) => setFieldValue(e.target.value)}
      ></textarea>
      {fieldMsg && (<span className="field__msg">{fieldMsg}</span>)}
    </label>
   );
}
 
export default TextArea;