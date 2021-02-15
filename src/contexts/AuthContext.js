import React,{useContext,useState,createContext,useEffect} from 'react';
import {auth} from '../firebase';

const AuthContext=createContext();
export const useAuth=()=>{
  return useContext(AuthContext);
}
const AuthContextProvider = (props) => {
    //const [isAuthenticated,setAuthenticated]=useState(false);
    const [currentUser,setCurrentUser]=useState();

    const signup=(email,password)=>{
      return auth.createUserWithEmailAndPassword(email,password);

    }
    // const toggleAuth=()=>{
    //     setAuthenticated({isAuthenticated:!isAuthenticated});
    // }
    useEffect(()=>{
      const unsubscribe=auth.onAuthStateChanged(user=>{
        setCurrentUser(user);
      })
      return unsubscribe;
    },[])
    

    const value={
      currentUser,
      signup
    }

    return (
        <AuthContext.Provider value={value}>
        {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;