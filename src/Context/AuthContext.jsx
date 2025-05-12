import { createContext, useEffect } from 'react';
import { useState } from 'react';

export const AuthContextSend =  createContext();





export default function AuthContext({children}) {

  const [AuthToken, setAuthToken] = useState(null)

  useEffect(() => {

    if (AuthToken == null) {
      const ser_token = localStorage.getItem("userToken")

      setAuthToken(ser_token)
    }
  }
  ,[]);



  return (

    <AuthContextSend.Provider value={ {AuthToken ,setAuthToken} }>

    {children}

    </AuthContextSend.Provider>  



 )}
