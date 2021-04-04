import React from 'react';
import { IoEnterOutline } from "react-icons/io5"

const BtnReset = ({title}) => {
  return ( 
    <button 
      type="reset"
      className="btn btn--reset"
    >
      <span className="btn__text">{title}</span>
      <span className="btn__icon"><IoEnterOutline/></span>     
    </button>
   );
}
 
export default BtnReset;