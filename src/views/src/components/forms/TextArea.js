import React from 'react';

const TextArea = ({title, defaultValue}) => {
  
  return ( 
    <label htmlFor={title} className="input input--textarea">
      <span className="input__title">{title}</span>
      <textarea 
        type="text"
        name={title}
        id={title}
        className="input__field"
        defaultValue={defaultValue}
      ></textarea>
      <span className="input__message"></span>
    </label>
   );
}
 
export default TextArea;