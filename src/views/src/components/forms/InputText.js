import React from 'react';

const InputText = (props) => {
  const { title } = props
  
  return ( 
    <label htmlFor={title} className="input input--text">
      <span className="input__title">{title}</span>
      <input 
        type="text"
        name={title}
        id={title}
        className="input__field"
        defaultValue={props.defaultValue}
      />
      <span className="input__message"></span>
    </label>
   );
}
 
export default InputText;