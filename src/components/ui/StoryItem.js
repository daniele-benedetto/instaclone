import React from 'react';

const StoryItem = ({name, image, active}) => {

  const classesActive = "bg-gradient-to-tr from-yellow-300 to-fuchsia-800";
  const classesInactive = "bg-slate-100";

  return (
    <li className="flex flex-col items-center space-y-1 relative w-1/5">
      <div className={`${active ? classesActive : classesInactive} p-1 rounded-full`}>
        <a className=" bg-white block rounded-full p-1 hover:-rotate-6 transform transition" href="#">
          <img className="h-12 w-12 rounded-full" src={image} alt={image} />
        </a>
      </div>
      <a className='text-center text-xs' href="#">{name}</a>
    </li> 
  );
}

export default StoryItem;