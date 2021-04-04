import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { IoEnterOutline } from "react-icons/io5";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button 
      onClick={() => loginWithRedirect()}
      type="button"
      className="btn btn--access"
    >
      <span className="btn__text">login</span>
      <span className="btn__icon"><IoEnterOutline/></span>
    </button>
  );
};

export default LoginButton;