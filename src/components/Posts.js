import React, { useEffect, useState } from 'react';
import { getPostService } from '../services/api/posts.service';
import PostsContainer from './layouts/PostsContainer';
import Post from './ui/Post';

const Posts = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPostService().then((response)=> {
      setPosts(response);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <PostsContainer>
      {posts.length > 0 && posts.map(post => {
        return (
          <Post
            key={post.id}
            id={post.id}
            name={post.user.fullName}
            username={post.user.username}
            profile={post.user.image}
            position={post.position}
            image={post.image}
            likes={post.likes}
            caption={post.caption}
          />
        );
      })}
    </PostsContainer>
  );
}

export default Posts;