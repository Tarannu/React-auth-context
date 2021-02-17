import React, { useContext,useState } from "react";
//import { AuthContext } from "../contexts/AuthContext";
import { BookContext } from "../contexts/BookContext";
import {Link,useHistory} from 'react-router-dom';
import {Card} from 'react-bootstrap';
import {useAuth} from '../contexts/AuthContext';
import {Button} from 'react-bootstrap';

const Navbar = () => {
  //const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const {books} =useContext(BookContext);
  const [error,setError]=useState("");
  const {currentUser,logout}=useAuth();
  const history=useHistory();
  //onClick={toggleAuth} > {isAuthenticated ? "Logged In" : "Logged Out"}
  
  
  
  return (
    <Card> 
    
      
      <nav>
      <h1>Book List App</h1>
      <div ></div>
      <ul>
        <Link to='/signup'><li> SignUp/Login </li></Link> 
              
      </ul>
      
    </nav>
    <p>Currently you have {books.length} book to get though ...</p>
    
    </Card> 
  );
};

export default Navbar;
