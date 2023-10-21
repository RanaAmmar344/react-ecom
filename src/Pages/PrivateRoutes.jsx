import React, { useContext } from 'react'
import {  Outlet, Navigate, } from 'react-router-dom'
import MyContext from '../Context/Context'

const PrivateRoutes = () => {

  
  const {userLogin}= useContext(MyContext);

if(!userLogin){

  return <Outlet/>
}else{
  return <Navigate to={'/login'} />
}
  

  

 
}

export default PrivateRoutes
