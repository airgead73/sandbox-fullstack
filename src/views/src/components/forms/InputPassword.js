import React from 'react';

const InputPassword = ({title, defaultValue}) => {

  return ( 
    <label htmlFor={title} className="input input--text">
      <span className="input__title">{title}</span>
      <input 
        type="password"
        name={title}
        id={title}
        className="input__field"
        defaultValue={defaultValue}
      />
      <span className="input__message"></span>
    </label>
   );
}
 
export default InputPassword;