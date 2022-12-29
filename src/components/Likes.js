import React, { useEffect, useState } from 'react';
import { getPostElementService } from '../services/api/posts.service';

import Container from './layouts/Container';

const Likes = ({id}) => {

  const [likes, setLikes] = useState([]);

  useEffect(() => {
    getPostElementService(id, 'likes').then((response)=> {
      setLikes(response);
      console.log(likes)
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <Container>
      {likes.length > 0 && likes.map(like => {
        return (
          <div key={like.id}>
            {like.user.fullName}
          </div>
        );
      })}
    </Container>
  );
}

export default Likes;