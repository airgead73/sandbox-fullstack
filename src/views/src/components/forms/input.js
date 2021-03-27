import React from 'react';

const TextInput = ({inputTitle, placeholder}) => {

  const [inputValue, setInputValue] = React.useState('');

  return ( 
    <label htmlFor="" className="field input--text">
      <span className="field__title">{inputTitle}</span>
      <input 
        type="text"
        name={inputTitle} 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder={placeholder} 
        autoComplete="off" 
        id={inputTitle} 
        className="field__content"
      />
    </label>
   );
}

const NumberInput = ({inputTitle, placeholder}) => {

  const [inputValue, setInputValue] = React.useState('');

  return ( 
    <label htmlFor="" className="field input--number">
      <span className="field__title">{inputTitle}</span>
      <input 
        type="number"
        name={inputTitle} 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder={placeholder} 
        autoComplete="off" 
        id={inputTitle} 
        className="field__content"
      />
    </label>
   );
}
 
export {
  NumberInput,
  TextInput
};