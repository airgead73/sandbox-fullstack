import React from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
  const { id } = useParams();
  return ( 
    <React.Fragment>
      <h2>update</h2>
      <p>{id}</p>
    </React.Fragment>
   );
}
 
export default Update;