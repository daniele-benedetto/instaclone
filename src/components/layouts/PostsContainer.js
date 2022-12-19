import React from 'react';

const PostsContainer = ({children}) => {
  return (
    <section className="w-full d-flex flex-col align-center bg-gray-100 border-top mb-10">
      {children}
    </section>
  );
}

export default PostsContainer;