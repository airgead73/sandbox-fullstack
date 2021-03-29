import React from 'react';

const SuccessMessage = ({children}) => {
  return (
    <aside className="message message--success">
      {children}
    </aside>   
  );
};

const ErrorMessage = ({children}) => {
  return (
    <aside className="message message--error">
      {children}
    </aside>   
  );
};

const FormMessage = (props) => {

  const { type } = props;

 
  if(type === 'success') {
    return <SuccessMessage>{props.children}</SuccessMessage>;
  } else {
    return <ErrorMessage>{props.children}</ErrorMessage>
  }


};
 
export default FormMessage;