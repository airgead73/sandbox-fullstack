import React from 'react';
import { IoEnterOutline } from "react-icons/io5";

const BtnSubmit = ({title}) => {
  return ( 
    <button 
      type="submit"
      className="btn btn--submit"
    >
      <span className="btn__text">{title}</span>
      <span className="btn__icon"><IoEnterOutline/></span>
    </button>
   );
}
 
export default BtnSubmit;