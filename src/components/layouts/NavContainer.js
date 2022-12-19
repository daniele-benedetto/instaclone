import React from 'react'

const NavContainer = ({styleNav, children}) => {

  const bottomNav = "flex fixed inset-x-0 bottom-0 z-10 bg-white shadow p-3 width-full justify-between";
  const topNav = "flex fixed inset-x-0 top-0 z-10 bg-white shadow p-3 justify-between";
  const storiesNav = "flex justify-start overflow-x-scroll mt-16 p-2 w-auto";

  let classes= "";

  switch(styleNav) {
    case "top": 
      classes = topNav;
      break;

    case "bottom":
      classes = bottomNav;
      break;

    case "stories":
      classes = storiesNav;
      break;
    
    default: 
    classes = topNav;
  }

  return (
    <section className={`${classes}`}>
      {children}
    </section>
  )
}

export default NavContainer