import React, { useContext } from "react";
//import { AuthContext } from "../contexts/AuthContext";
import { BookContext } from "../contexts/BookContext";


const Navbar = () => {
  //const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const {books} =useContext(BookContext);
  //onClick={toggleAuth} > {isAuthenticated ? "Logged In" : "Logged Out"}
  return (
      <div>
    <nav>
      <h1>Book List App</h1>
      <div ></div>
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
