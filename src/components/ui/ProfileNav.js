import React from 'react';

import NavContainer from '../layouts/NavContainer';

import NavItem from './NavItem';

import PlusIcons from '../icons/PlusIcons';
import HeartIcon from '../icons/HeartIcon';

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
  }
];

const ProfileNav = () => {
  return (
    <NavContainer styleNav="top">
      <div className='w-1/3 font-bold mt-2'>
        benedetto.daniele
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

export default ProfileNav;