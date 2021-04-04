import React from 'react';

const InputPassword = ({title, defaultValue}) => {

  return ( 
    <label htmlFor={title} className="field" data-status="initial">
      <span className="field__title">{title}</span>
      <input 
        type="password"
        name={title}
        id={title}
        className="field__content field--password"
        defaultValue={defaultValue}
      />
      <span className="field__msg"></span>
    </label>
   );
}
 
export default InputPassword;