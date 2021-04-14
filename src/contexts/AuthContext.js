import React,{createContext,useReducer, useEffect} from 'react';
import {authReducer} from '../reducers/AuthReducer'
export const AuthContext=createContext()

const AuthContextProvider=({children}) => {
    //state
    // const [isAuthenticated,setAuthentication]=useState(false)
    // const toggleAuth=() => {
    //     setAuthentication(!isAuthenticated)
    // }
    const [isAuthenticated, dispatch] = useReducer(authReducer, false)
    //useEffect
    useEffect(() => {
        alert(isAuthenticated ? 'BRAVO! Đăng nhập thành công' : 'Thoát ra rồi đấy, đăng nhập lại đi pls !!!!')
    }, [isAuthenticated])
      //context data
      const authContextData={
        isAuthenticated,
        dispatch
        // toggleAuth
    }
    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider
