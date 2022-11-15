import React, { useState, useEffect } from 'react'

const AuthContext = React.createContext({
   isLoggedIn: false,
   onLogout: () => {},
   onLogin: (email, password) => {}
});
 export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    
  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('IsLoggedIn');

 if(storedUserLoggedInInformation === '1') {
   setIsLoggedIn(true);
 }
 }, []);

    const logoutHandler = () => {
        localStorage.setItem('isLoggedin', '1')
        setIsLoggedIn(false);
    };
    const loginHandler = () => {
        setIsLoggedIn(true);
    }
    return <AuthContext.Provider
    value={{
        isLoggedIn:isLoggedIn,
        onLogout:logoutHandler,
        onLogin:loginHandler,
    }}
    >{props.children}
    </AuthContext.Provider>
  }

export default AuthContext;