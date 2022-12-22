import React, {useState} from 'react';

import RequireAuth from '../components/layouts/RequireAuth';
import { postUserWithAuthService } from '../services/api/auth.service';

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
    const userId = localStorage.getItem("id");
    postUserWithAuthService(
      userId, 'posts', formToSend
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
