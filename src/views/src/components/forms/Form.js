import React from 'react';


const FormPost = (props) => {
  const {
    action, 
    children,
    method,
    name,
    size, 
    title, 
    children } = props;


  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
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