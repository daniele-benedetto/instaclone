import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({slug, icon}) => {
  return (
    <NavLink to={slug} className="justify-center inline-block text-center p-2">
        {icon}
    </NavLink>
  );
}

export default NavItem;