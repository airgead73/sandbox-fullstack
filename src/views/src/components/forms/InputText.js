import React, { useContext, useEffect, useState } from 'react';
import { FormContext } from './../../contexts';

const InputText = (props) => {  
  const { title } = props;
  const { formStatus } = useContext(FormContext);

  const [fieldValue, setFieldValue] = useState('');
  const [fieldStatus, setFieldStatus] = useState('initial');
  const [fieldMsg, setFieldMsg] = useState(null);

  const handleFieldChange = (e) => {
    setFieldValue(e.target.value);
    setFieldStatus('submitted');
    setFieldMsg('message');
  }

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
      <input 
        type="text"
        name={title}
        id={title}
        className="field__content field--text"
        value={fieldValue}
        onChange={(e) => handleFieldChange(e)}
      />
      {fieldMsg && (<span className="field__msg">{fieldMsg}</span>)}
    </label>
   );
}
 
export default InputText;