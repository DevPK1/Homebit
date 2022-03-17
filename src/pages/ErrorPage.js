import React from 'react';
import {Link} from 'react-router-dom'
const ErrorPage = () => {
  return (
    <div className='container error-wrapper'>
      <div className="row text-center"> 
        <div className="col">
          <h1>404 Page not found !</h1>
          <Link to='/' className="btn btn-primary mt-3">Back Home</Link>
        </div>
      </div>
    </div>
  )

}


export default ErrorPage
