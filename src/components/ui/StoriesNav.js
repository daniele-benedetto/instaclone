import React from 'react';

import NavContainer from '../layouts/NavContainer';

import StoryItem from './StoryItem';

const stories = [
  {
    id: 1,
    image: "http://placekitten.com/200/300",
    name: "La tua storia",
    active: true,
  },
  {
    id: 2,
    image: "http://placekitten.com/200/300",
    name: "La tua storia",
    active: true,
  },
  {
    id: 3,
    image: "http://placekitten.com/200/300",
    name: "La tua storia",
    active: true,
  },
  {
    id: 4,
    image: "http://placekitten.com/200/300",
    name: "La tua storia",
    active: false,
  }
];

const StoriesNav = () => {
  
  return (
      <NavContainer styleNav="stories">
        {stories.map(story => {
          return(
            <StoryItem 
              key={story.id} 
              name={story.name} 
              active={story.active} 
              image={story.image}
            />
          );
        })}
      </NavContainer>
  );
}

export default StoriesNav;