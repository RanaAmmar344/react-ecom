import React, { useContext } from 'react'
import {  Outlet, Navigate, useLocation } from 'react-router-dom'
import MyContext from '../Context/Context'

const PrivateRoutes = () => {

  const location = useLocation();
  const {userLogin}= useContext(MyContext);

if(userLogin){

  return <Outlet/>
}else{

  return <Navigate to={'/login'} state={{ redirectedFrom : location }}  />
}
  

  

 
}

export default PrivateRoutes
