import React from 'react';

const Main = ({layout, children}) => { 
  return ( 
    <main className={`main main--${layout}`}>
      {children}
    </main>
   );
}
 
export default Main;