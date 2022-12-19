import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = ({src}) => {
  return (
    <NavLink className='logo m-auto mb-10'>
        <img src={src} alt="Logo of Istagram" />
    </NavLink>
  )
}

export default Logo;
