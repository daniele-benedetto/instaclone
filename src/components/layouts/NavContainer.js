import React from 'react'

const NavContainer = ({styleNav, children}) => {

  const NavBottom = "flex fixed inset-x-0 bottom-0 z-10 bg-white shadow p-3 width-full justify-between max-w-md mx-auto";
  const NavTop = "flex fixed inset-x-0 top-0 z-10 bg-white shadow p-3 justify-between max-w-md mx-auto";
  const middleNav = "flex justify-start overflow-x-scroll mt-16 p-2 w-auto max-w-md mx-auto bg-white";
  const normalNav = "flex items-center justify-between mx-4 mt-3 mb-2"

  let classes= "";

  switch(styleNav) {
    case "top": 
      classes = NavTop;
      break;

    case "bottom":
      classes = NavBottom;
      break;

    case "middle":
      classes = middleNav;
      break;

    case "normal":
        classes = normalNav;
        break;
    
    default: 
    classes = NavTop;
  }

  return (
    <section className={`${classes}`}>
      {children}
    </section>
  )
}

export default NavContainer