import React from 'react';

import HomeIcon from '../icons/HomeIcon';
import PlusIcons from '../icons/PlusIcons';
import SearchIcon from '../icons/SearchIcon';

import NavContainer from '../layouts/NavContainer';
import NavItem from './NavItem';

const navItem = [
  {
    id: 1,
    slug: '/',
    icon: <HomeIcon />,
  },
  {
    id:2,
    slug: '/',
    icon: <SearchIcon />,
  },
  {
    id:3,
    slug: '/add-post',
    icon: <PlusIcons />,
  },
];

const BottomNav = () => {
  return (
    <NavContainer styleNav="bottom">        
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
    </NavContainer>
  );
}

export default BottomNav;