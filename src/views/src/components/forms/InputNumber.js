import React from 'react';

const InputNumber = ({title, defaultValue}) => {

  return ( 
    <label htmlFor={title} className="field" data-status="initial">
      <span className="field__title">{title}</span>
      <input 
        type="number"
        name={title}
        id={title}
        className="field__content field--number"
        defaultValue={defaultValue}
      />
      <span className="field__msg"></span>
    </label>
   );
}
 
export default InputNumber;