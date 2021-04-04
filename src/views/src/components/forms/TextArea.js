import React from 'react';

const TextArea = ({title, defaultValue}) => {
  
  return ( 
    <label htmlFor={title} className="field" data-status="initial">
      <span className="field__title">{title}</span>
      <textarea 
        type="text"
        name={title}
        id={title}
        className="field__content field--textarea"
        defaultValue={defaultValue}
      ></textarea>
      <span className="field__msg"></span>
    </label>
   );
}
 
export default TextArea;