import React, { useState } from 'react';

const TextInput = ({title, placeholder}) => {
  const [inputValue, setInputValue] = useState('');
  return ( 
    <label htmlFor={title} className="input input--text">
    <span className="input__title">{title}</span>
    <input 
      type="text" 
      name={title} 
      value={inputValue} 
      onChange={(e) => setInputValue(e.target.value)} 
      placeholder={placeholder} 
      autoComplete="off" 
      id={title} 
      className="input__field"
    />
  </label>     
   );
}
 
export {TextInput};