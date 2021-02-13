import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { BookContext } from "../contexts/BookContext";


const Navbar = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const {books} =useContext(BookContext);
  return (
      <div>
    <nav>
      <h1>Context App</h1>
      <div onClick={toggleAuth}>{isAuthenticated ? "Logged In" : "Logged Out"}</div>
      <ul>
        <li> Home </li>
        <li> About </li>
        <li> Contact</li>
      </ul>
      
    </nav>
    <p>Currently you have {books.length} book to get though ...</p>
    </div>
  );
};

export default Navbar;
