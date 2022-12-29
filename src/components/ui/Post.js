import React from 'react';
import { Link } from 'react-router-dom';

import NavPost from './NavPost';

const Post = ({id, name, position, image, likes, comments, profile, caption, username, getPost, userId}) => {
  return (
    <div className="bg-white rounded-sm max-w-md m-auto">
      <div className="flex items-center px-4 py-3">
        <Link to={`/profile/${userId}`}>
          <img className="h-8 w-8 rounded-full" src={require(`../../images/${profile}.png`)}/>
        </Link>
        <div className="ml-3 ">
            <Link to={`/profile/${userId}`} className="text-sm font-semibold antialiased block leading-tight">{name}</Link>
            <span className="text-gray-600 text-xs block">{position}</span>
        </div>
      </div>
      <img className='w-full' src={image} alt={image} />
      <NavPost id={id} likes={likes} getPost={getPost} />
      { likes.length > 0 && <Link to={`/post/likes/${id}`} className="font-semibold text-sm mx-4 mt-2 mb-4">
        {likes.length} likes
      </Link> }
      <div className="text-sm mx-4 mt-2">
        <b>{username}</b> {caption}
      </div>
      { comments.length > 0 && <Link to={`/post/comments/${id}`} className='italic text-xs mx-4 color-grey'>Visualizza tutti i commenti</Link> }
    </div>
  );
}

export default Post;