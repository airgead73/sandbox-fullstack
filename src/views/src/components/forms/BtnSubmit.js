import React from 'react';
import { IoAddOutline } from "react-icons/io5";

const BtnSubmit = ({title}) => {
  return ( 
    <button 
      type="submit"
      className="btn btn--submit"
    >
      <span className="btn__text">{title}</span>
      <span className="btn__icon"><IoAddOutline/></span>
    </button>
   );
}
 
export default BtnSubmit;