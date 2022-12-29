import React, {useState} from 'react';

import RequireAuth from '../components/layouts/RequireAuth';
import { postWithAuthService } from '../services/api/auth.service';

import { useNavigate } from 'react-router-dom';

import FormContainer from '../components/layouts/FormContainer';

import FormAddPost from '../components/FormAddPost';
import NavSub from '../components/ui/NavSub';
import NavBottom from '../components/ui/NavBottom';

import axios from 'axios';

const AddPostPage = () => {
  
  const navigate = useNavigate();

  const [error,setError] = useState(null);

  const redirect = () => {
    navigate("/")
  }

  const onAddPost = (formToSend) => {
    console.log(formToSend);
  }

  return (
  <RequireAuth>
    <div className='PostPage'>
      <NavSub name="Nuovo post" />
      <FormContainer>
        <FormAddPost
          onAddPost={(f) => onAddPost(f)}
          error={error}
        />
      </FormContainer>
      <NavBottom />
    </div>
  </RequireAuth>
  );
}

export default AddPostPage;
