import React from 'react';
import { useLayout } from './../../hooks';


const List = () => {
  useLayout('list');
  return ( 
    <h2>photos list</h2>
   );
}
 
export default List;