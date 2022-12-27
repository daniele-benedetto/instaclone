import React from 'react';

import NavContainer from '../layouts/NavContainer';

import Logo from './Logo';
import NavItem from './NavItem';

import LogoImage from '../../images/logo.png';

import PlusIcons from '../icons/PlusIcons';
import HeartIcon from '../icons/HeartIcon';
import SendIcon from '../icons/SendIcon';

const navItem = [
  {
    id: 1,
    slug: '/add-post',
    icon: <PlusIcons />,
  },
  {
    id:2,
    slug: '/',
    icon: <HeartIcon />,
  },
  {
    id:3,
    slug: '/',
    icon: <SendIcon />,
  },
];

const NavTop = () => {
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
              slug={item.slug} 
              icon={item.icon} 
            />
          );
        })}
      </div>      
    </NavContainer>
  );
}

export default NavTop;