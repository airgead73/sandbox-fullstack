import React from 'react';

const InputNumber = ({title}) => {

  return ( 
    <label htmlFor={title} className="input input--text">
      <span className="input__title">{title}</span>
      <input 
        type="number"
        name={title}
        id={title}
        className="input__field"
      />
      <span className="input__message"></span>
    </label>
   );
}
 
export default InputNumber;