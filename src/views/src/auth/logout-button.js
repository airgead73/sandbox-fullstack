import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import { IoExitOutline } from "react-icons/io5"

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
      type="button"
      className="btn btn--access"
    >
      <span className="btn__text">logout</span>
      {/* <span className="btn__icon"><IoExitOutline/></span> */}
    </button>
  );
};

export default LogoutButton;