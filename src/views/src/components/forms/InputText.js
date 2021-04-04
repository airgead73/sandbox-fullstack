import React from 'react';

const InputText = (props) => {
  const { title } = props
  
  return ( 
    <label htmlFor={title} className="field" data-status="initial">
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
 
export default InputText;