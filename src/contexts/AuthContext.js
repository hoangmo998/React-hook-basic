import React,{createContext,useState, useEffect} from 'react';

export const AuthContext=createContext()

const AuthContextProvider=({children}) => {
    //state
    const [isAuthenticated,setAuthentication]=useState(false)
    const toggleAuth=() => {
        setAuthentication(!isAuthenticated)
    }
  
    //useEffect
    useEffect(() => {
        alert(isAuthenticated ? 'BRAVO! Đăng nhập thành công' : 'Thoát ra rồi đấy, đăng nhập lại đi pls !!!!')
    }, [isAuthenticated])
      //context data
      const authContextData={
        isAuthenticated,
        toggleAuth
    }
    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider
