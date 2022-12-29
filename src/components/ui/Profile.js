import React from 'react';

const Profile = ({user, posts}) => {

  return (
    <div className='flex flex-wrap w-full'>
      {posts && posts.map(post => {
        return(
          <div key={post.id} className='w-1/3'>
            <img src={post.image} />
          </div>
        );
      })}
    </div>
  );
}

export default Profile;