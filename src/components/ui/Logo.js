import React from 'react';

const Logo = ({src}) => {
  return (
    <div className='logo m-auto mb-10'>
        <img src={src} alt="Logo of Istagram" />
    </div>
  )
}

export default Logo;
