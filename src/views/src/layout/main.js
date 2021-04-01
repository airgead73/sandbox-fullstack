import React from 'react';

const Main = ({layout, children}) => { 
  return ( 
    <main className={layout}>
      {children}
    </main>
   );
}
 
export default Main;