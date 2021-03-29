import React from 'react';

const FormMessage = (props) => {

  const { type } = props;

  return ( 
    <aside className={`message ${type}`}>
      {props.children}
    </aside>
   );
}
 
export default FormMessage;