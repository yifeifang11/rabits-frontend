import React from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Logout = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };
  return (
    <div className="border border-1 px-4 py-2 rounded-md text-center my-2">
      {!cookies.access_token ? (
        <div></div>
      ) : (
        <button onClick={logout}> Logout </button>
      )}
    </div>
  );
};

export default Logout;
