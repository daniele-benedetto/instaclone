import React from 'react';

const PostsContainer = ({children}) => {
  return (
    <section className="w-full d-flex flex-col align-center border-top mb-20 mt-5">
      {children}
    </section>
  );
}

export default PostsContainer;