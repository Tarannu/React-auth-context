import React,{useState,createContext} from 'react';

export const AuthContext=createContext();

const AuthContextProvider = (props) => {
    const [isAuthenticated,setAuthenticated]=useState(false);

    const toggleAuth=()=>{
        setAuthenticated({isAuthenticated:!isAuthenticated});
    }

    return (
        <AuthContext.Provider value={{...isAuthenticated,toggleAuth:toggleAuth}}>
        {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;