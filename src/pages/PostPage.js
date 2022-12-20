import React, {useState} from 'react';

import RequireAuth from '../components/layouts/RequireAuth';
import { postRegisterPost } from '../services/api/posts.service';

import { useNavigate } from 'react-router-dom';

import FormContainer from '../components/layouts/FormContainer';

import FormAddPost from '../components/FormAddPost';

const PostPage = () => {
  
  const navigate = useNavigate();

  const [error,setError] = useState(null);

  const redirect = () => {
    navigate("/")
  }

  const onAddPost = (formToSend) => {
    postRegisterPost(
      formToSend
    ).then(()=> {
      redirect();
    }).catch((response) => {
      const message = response.data;
      setError(message);
    });
  }

  return (
  <RequireAuth>
    <div className='PostPage'>
      <FormContainer>
        <FormAddPost
          onAddPost={(f) => onAddPost(f)}
          error={error}
        />
      </FormContainer>
    </div>
  </RequireAuth>
  );
}

export default PostPage;
