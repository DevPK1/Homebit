import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'


const AuthWrapper = ({children}) => {
  const{isLoading,error}=useAuth0()

  if(isLoading){
    return <div className='container error-wrapper'>
    <div className="row text-center"> 
      <div className="col">
        <h1>Loading...</h1>
      </div>
    </div>
  </div>
  }

  if(error){
    return <div className='container error-wrapper'>
    <div className="row text-center"> 
      <div className="col">
        <h1>{error.message}</h1>
      </div>
    </div>
  </div>
  }
  return <>
  {children}
  </>
}


export default AuthWrapper
