import React from 'react';

const InputPassword = ({title}) => {
  const checkInput = (e) => {

    console.log('check input', e.target);

  }
  return ( 
    <label htmlFor={title} className="input input--text">
      <span className="input__title">{title}</span>
      <input 
        type="password"
        name={title}
        id={title}
        className="input__field"
        onBlur={checkInput}
      />
      <span className="input__message"></span>
    </label>
   );
}
 
export default InputPassword;