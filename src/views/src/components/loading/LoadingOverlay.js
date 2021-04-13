import React from 'react';

const LoadingOverlay = ({message}) => {
  return ( 
    <section className="loading loading--overlay">
      <article className="loading__content">
        <h3 className="loading__msg">Item is loading</h3>
      </article>
    </section>
   );
}
 
export default LoadingOverlay;