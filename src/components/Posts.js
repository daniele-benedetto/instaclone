import React, { useEffect, useState } from 'react';
import { getPostsService } from '../services/api/posts.service';
import PostsContainer from './layouts/PostsContainer';
import Post from './ui/Post';

const Posts = () => {

  const [posts, setPosts] = useState([]);

  const getPost = () => {
    getPostsService().then((response)=> {
      setPosts(response);
    }).catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <PostsContainer>
      {posts.length > 0 && posts.map(post => {
        return (
          <Post
            key={post.id}
            id={post.id}
            userId={post.user.id}
            name={post.user.fullName}
            username={post.user.username}
            profile={post.user.image}
            position={post.position}
            image={post.image}
            likes={post.likes}
            caption={post.caption}
            comments={post.comments}
            setPosts={setPosts}
            posts={posts}
            getPost={getPost}
          />
        );
      })}
    </PostsContainer>
  );
}

export default Posts;