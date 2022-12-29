import React, { useEffect, useState } from 'react';
import { postWithAuthService } from '../services/api/auth.service';
import { getPostElementService } from '../services/api/posts.service';

import FormAddComment from './FormAddComment';

import Container from './layouts/Container';

const Comments = ({id}) => {

  const [comments, setComments] = useState([]);

  const getComments = () => {
    getPostElementService(id, 'comments').then((response)=> {
      setComments(response);
      console.log(comments);
    }).catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    getComments();
  }, []);

  const onAddComment = (formToSend) => {
    const userId = localStorage.getItem("id");

    postWithAuthService(
      userId, 'comments', formToSend
    ).then(()=> {
      getComments();
    }).catch((response) => {
      console.log(response);
    });

  }

  return (
    <Container>
      {comments.length > 0 && comments.map(comment => {
        return (
          <div key={comment.id}>
            {comment.comment}
          </div>
        );
      })}
      <FormAddComment
        onAddComment={(f) => onAddComment(f)}
        id={id}
      />
    </Container>
  );
}

export default Comments;
