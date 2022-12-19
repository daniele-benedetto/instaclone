import React from 'react';

import NavContainer from '../layouts/NavContainer';

import Logo from './Logo';
import NavItem from './NavItem';

import LogoImage from '../../images/logo.png';

const navItem = [
  {
    id: 1,
    title: 'Home',
    slug: '/',
    icon: '',
  },
  {
    id:2,
    title: 'Home',
    slug: '/',
    icon: '',
  },
  {
    id:3,
    title: 'Home',
    slug: '/',
    icon: '',
  },
];

const TopNav = () => {
  return (
    <NavContainer styleNav="top">
      <div className='w-1/3'>
        <Logo src={LogoImage} />
      </div>       
      <div className='w-2/3 flex justify-end'>
        {navItem.map(item => {
          return (
            <NavItem 
              key={item.id} 
              title={item.title} 
              slug={item.slug} 
              icon={item.icon} 
            />
          );
        })}
      </div>      
    </NavContainer>
  );
}

export default TopNav;