import React, { useEffect } from 'react';

const InputTest = (props) => {
  const { title, formStatus } = props;

  useEffect(() => {

    alert(`form status is ${formStatus}`);

  },[formStatus]);
  
  return ( 
    <label htmlFor={title} className="field" data-status={formStatus}>
      <span className="field__title">{title}</span>
      <input 
        type="text"
        name={title}
        id={title}
        className="field__content field--text"
        defaultValue={props.defaultValue}
      />
      <span className="field__msg"></span>
    </label>
   );
}
 
export default InputTest;