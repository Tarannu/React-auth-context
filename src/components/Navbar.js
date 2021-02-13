import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  return (
    <nav>
      <h1>Context App</h1>
      <div onClick={toggleAuth}>{isAuthenticated ? "Logged In" : "Logged Out"}</div>
      <ul>
        <li> Home </li>
        <li> About </li>
        <li> Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
