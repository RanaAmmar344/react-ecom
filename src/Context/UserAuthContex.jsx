import React, { useState } from 'react'
import MyContext from './Context'

const UserAuthContex = (props) => {

const  [userLogin,setUserLogin]=useState(true);

 
 
const SignIn =()=>{

    setUserLogin(true);
}
const SignOut =()=>{

    setUserLogin(false)
}





  return (
    <MyContext.Provider value={{userLogin,SignIn,SignOut}}>
  
          {props.children}

    </MyContext.Provider>
  )
}

export default UserAuthContex
