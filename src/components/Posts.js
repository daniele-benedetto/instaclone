import React, { useEffect, useState } from 'react';
import { getPost } from '../services/api/posts.service';
import PostsContainer from './layouts/PostsContainer';
import Post from './ui/Post';

const Posts = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPost().then((response)=> {
      console.log(response)
      setPosts(response);
    }).catch(() => {
      console.log('Non ci sono post presenti')
    });
  }, [])

  return (
    <PostsContainer>
      {posts.length > 0 && posts.map(post => {
        return (
          <Post
            key={post.id}
            name='Daniele Benedetto'
            profile='https://picsum.photos/id/1027/150/150'
            position='Asheville, North Carolina'
            image='https://picsum.photos/id/244/900/900'
            likes={55}
          />
        );
      })}
    </PostsContainer>
  );
}

export default Posts;