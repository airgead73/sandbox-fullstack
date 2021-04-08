import React, { useContext } from 'react';
import { FormContext } from './../../contexts';


const FormPost = (props) => {
  const { changeFormStatus } = useContext(FormContext);
  const {
    action, 
    children,
    method,
    name,
    size, 
    title
  } = props;


  const handleSubmit = async (e) => {
    e.preventDefault();
    changeFormStatus('submitted');
  }

  return ( 
    
    <form 
      onSubmit={handleSubmit}
      className={`form form--${size}`}
      action={action}
      method={method}
      name={name}
      autoComplete="off"
    >      
      <fieldset className="form__border">
        <legend className="form__title">{title}</legend>
        {children}
      </fieldset>
      
    </form>
   );
}
 
export default FormPost;