import React from 'react';

const InputEmail = ({title, defaultValue, status}) => {

  return ( 
    <label htmlFor={title} className="field" data-status="initial">
      <span className="field__title">{title}</span>
      <input 
        type="email"
        name={title}
        id={title}
        className="field__content field--email"
        defaultValue={defaultValue}
      />
      <span className="field__msg"></span>
    </label>
   );
}
 
export default InputEmail;