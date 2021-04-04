import React from 'react';
import { IoRefreshOutline } from "react-icons/io5"

const BtnReset = ({title}) => {
  return ( 
    <button 
      type="reset"
      className="btn btn--reset"
    >
      <span className="btn__text">{title}</span>
      <span className="btn__icon"><IoRefreshOutline/></span>     
    </button>
   );
}
 
export default BtnReset;