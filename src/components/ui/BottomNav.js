import React from 'react';

import NavContainer from '../layouts/NavContainer';
import NavItem from './NavItem';

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
  {
    id:4,
    title: 'Home',
    slug: '/',
    icon: '',
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