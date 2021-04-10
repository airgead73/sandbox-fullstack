import React from 'react';

const TableContainer = ({ title, children }) => {
  return ( 
    <table>
      <caption>{title}</caption>
      {children}
    </table>
   );
}
 
export default TableContainer;