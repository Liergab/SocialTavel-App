import { useState } from "react"
import { Navigate, Outlet } from "react-router-dom"


const Private = () => {
    const [token, isToken] = useState(true)
    if(token){
      return <Outlet/>
    }
  return <Navigate to="/signin"/>
    
  
}

export default Private
