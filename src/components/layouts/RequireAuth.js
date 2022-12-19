import React from 'react'
import { Navigate } from 'react-router-dom';

const RequireAuth = ({children}) => {
  const auth = localStorage.getItem('auth');

  if(!auth){
    return <Navigate to="/login" replace />;
  }

  return <main>{children}</main>
}

export default RequireAuth