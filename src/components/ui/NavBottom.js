import React from 'react';

import HomeIcon from '../icons/HomeIcon';
import PlusIcons from '../icons/PlusIcons';
import SearchIcon from '../icons/SearchIcon';

import NavContainer from '../layouts/NavContainer';
import NavItem from './NavItem';

const userId = localStorage.getItem("id");

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
  {
    id: 4,
    slug: `/profile/${userId}`,
    icon:  <img className="h-8 w-8 rounded-full" src={require(`../../images/profile.png`)}/>
  }
];

const NavBottom = () => {
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

export default NavBottom;