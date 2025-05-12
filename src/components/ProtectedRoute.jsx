import { useContext } from "react"
import { AuthContextSend } from '../Context/AuthContext';
import { Navigate } from "react-router-dom";
import { useEffect } from "react";


export default function ProtectedRoute({children}) {


        // we will need it
    // const { AuthToken ,setAuthToken } = useContext(AuthContextSend)

  

    if ( localStorage.getItem("userToken") == null ) {

        return <Navigate to={"/Login"} />
    }
    
  return (
    <>

  {children}
    
    </>
  )
}
