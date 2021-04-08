import React, { useState } from 'react';

const FormTest = (props) => {
  const [status, setStatus] = useState(props.status);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('success');
    console.log(status)

  }

  return ( 
    <form 
      onSubmit={handleSubmit}
      className={`form form--${props.size}`}
    >      
      <fieldset className="form__border">
        <legend className="form__title">{props.title}</legend>
        {props.children}
      </fieldset>
      
    </form>
   );
}
 
export default FormTest;