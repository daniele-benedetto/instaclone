import React from 'react';
import {NavLink} from 'react-router-dom';

const Link = ({href, styleLink, title}) => {

  const primaryLink = "border";
  const outlineLink = "border";
  const defaultLink = "flex justify-center text-center text-sky-900";

  let classes = "";


  switch(styleLink) {
    case "primary": 
      classes = primaryLink;
      break;

    case "outline":
      classes = outlineLink;
      break;
    
    default: 
    classes = defaultLink;
  }

  return (
    <NavLink className={`${classes}`} to={href}>{title}</NavLink>
  );
}

export default Link;
