import React,{useContext,useState,createContext,useEffect} from 'react';
import {auth} from '../firebase';

const AuthContext=createContext();
export const useAuth=()=>{
  return useContext(AuthContext);
}
const AuthContextProvider = (props) => {
    //const [isAuthenticated,setAuthenticated]=useState(false);
    const [currentUser,setCurrentUser]=useState();
    const [loading,setLoading]=useState(true);

    const signup=(email,password)=>{
      return auth.createUserWithEmailAndPassword(email,password);

    }
    const login=(email,password)=>{
      return auth.signInWithEmailAndPassword(email,password);

    }

    // const toggleAuth=()=>{
    //     setAuthenticated({isAuthenticated:!isAuthenticated});
    // }
    useEffect(()=>{
      const unsubscribe=auth.onAuthStateChanged(user=>{
        setLoading(false)
        setCurrentUser(user);
      })
      return unsubscribe;
    },[])
    

    const value={
      currentUser,
      signup,
      login
    }

    return (
        <AuthContext.Provider value={value}>
        {!loading && props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;