import React from 'react';

import NavContainer from '../layouts/NavContainer';

import ArrowLeftIcon from '../icons/ArrowLeftIcon';

import NavItem from './NavItem';




const NavSub = ({name}) => {
  return (
    <NavContainer styleNav="top">
      <div className='w-1/2 flex items-center'>
        < NavItem slug='/' icon={<ArrowLeftIcon />} />
        <h2 className='font-bold ml-2'>{name}</h2>
      </div>      
      <div className='w-1/2 flex justify-end items-center'>
      </div>      
    </NavContainer>
  );
}

export default NavSub;

