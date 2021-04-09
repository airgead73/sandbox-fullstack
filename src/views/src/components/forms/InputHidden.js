import React from 'react';

const InputHidden = (props) => {  
  const { title, defaultValue } = props;
  
  return ( 

      <input 
        type="hidden"
        name={title}
        id={title}
        className="field__content field--hidden"
        defaultValue={defaultValue}
      />
    
   );
}
 
export default InputHidden;