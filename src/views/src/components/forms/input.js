import React, { useEffect } from 'react';

const TextInput = ({inputTitle, placeholder, submitted}) => {

  const [inputValue, setInputValue] = React.useState('');

  useEffect(() => {

    if(submitted) {
      setInputValue('');
    }

  },[submitted])

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

const TextArea = ({inputTitle, placeholder}) => {

  const [inputValue, setInputValue] = React.useState('');

  return ( 
    <label htmlFor="" className="field input--textarea">
      <span className="field__title">{inputTitle}</span>
      <textarea 
        type="text"
        name={inputTitle} 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder={placeholder} 
        autoComplete="off" 
        id={inputTitle} 
        className="field__content"
      ></textarea>
    </label>
   );
}

const NumberInput = ({inputTitle, placeholder, submitted}) => {

  const [inputValue, setInputValue] = React.useState('');

  useEffect(() => {

    if(submitted) {
      setInputValue('');
    }

  },[submitted])

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
  TextInput,
  TextArea
};