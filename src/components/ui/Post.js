import React, { useState } from 'react';
import { postWithAuthService } from '../../services/api/auth.service';
import FormAddComment from '../FormAddComment';
import BookmarkIcon from '../icons/BookmarkIcon';
import CommentIcon from '../icons/CommentIcon';
import HeartIcon from '../icons/HeartIcon';
import SendIcon from '../icons/SendIcon';


const Post = ({id, name, position, image, likes, profile, caption, username}) => {

  const [likesCount, setLikesCount] = useState(likes.length);

  const onAddComment = (formToSend) => {
    const userId = localStorage.getItem("id");
    postWithAuthService(
      userId, 'comments', formToSend
    ).then(()=> {
    }).catch((response) => {
    });
  }

  return (
    <div className="bg-white rounded-sm max-w-md m-auto">
      <div className="flex items-center px-4 py-3">
        <img className="h-8 w-8 rounded-full" src={require(`../../images/${profile}.png`)}/>
        <div className="ml-3 ">
            <span className="text-sm font-semibold antialiased block leading-tight">{name}</span>
            <span className="text-gray-600 text-xs block">{position}</span>
        </div>
      </div>
      <img className='w-full' src={image} alt={image} />
      <div className="flex items-center justify-between mx-4 mt-3 mb-2">
        <div className="flex gap-5">
          <HeartIcon id={id} setLikesCount={setLikesCount} likesCount={likesCount} likes={likes} />
          <CommentIcon />
          <SendIcon />
        </div>
        <div className="flex">
          <BookmarkIcon />
        </div>
      </div>
      { likes && <div className="font-semibold text-sm mx-4 mt-2 mb-4">
        {likesCount} likes
      </div>}
      <div className="text-sm mx-4 mt-2 mb-4">
        <b>{username}</b> {caption}
      </div>
      <FormAddComment
        onAddComment={(f) => onAddComment(f)}
        id={id}
      />
    </div>
  );
}

export default Post;