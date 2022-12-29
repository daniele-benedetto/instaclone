import React from 'react';

import NavContainer from '../layouts/NavContainer';

import HeartIcon from '../icons/HeartIcon';
import CommentIcon from '../icons/CommentIcon';
import SendIcon from '../icons/SendIcon';
import BookmarkIcon from '../icons/BookmarkIcon';
import { Link } from 'react-router-dom';

const NavPost = ({id, likes, getPost}) => {
  return (
    <NavContainer styleNav="normal">        
      <div className="flex gap-5">
          <HeartIcon id={id} likes={likes} getPost={getPost} />
          <Link to={`/post/comments/${id}`}>
            <CommentIcon />
          </Link>
          <SendIcon />
      </div>
      <div className="flex">
          <BookmarkIcon />
      </div>
    </NavContainer>
  );
}

export default NavPost;