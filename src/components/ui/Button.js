import React from 'react';

const Button = ({title, onClick, styleBtn}) => {

  const primaryBtn = "w-full font-bold mb-5 text-white rounded-md h-10 bg-sky-500/50";
  const outlineBtn = "border";
  const defaultBtn = "border";

  let classes = "";


  switch(styleBtn) {
    case "primary": 
      classes = primaryBtn;
      break;

    case "outline":
      classes = outlineBtn;
      break;
    
    default: 
    classes = defaultBtn;
  } 

  return (
    <button className={`${classes}`} type="button" onClick={onClick}>
      {title}
    </button>  
  );
}

export default Button;
