import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({slug, title, icon}) => {
  return (
    <NavLink to={slug} className="justify-center inline-block text-center p-2">
        <span className="tab tab-home block text-xs">{title}</span>
    </NavLink>
  );
}

export default NavItem;