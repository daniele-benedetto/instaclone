import React from 'react';
import { useParams } from 'react-router-dom';

import RequireAuth from '../components/layouts/RequireAuth';
import Likes from '../components/Likes';

import NavBottom from '../components/ui/NavBottom';
import NavSub from '../components/ui/NavSub';

const LikesPage = () => {

  const { id } = useParams();

  return (
  <RequireAuth>
    <div className='LikesPage'>
      <NavSub name='Commenti' />
      <Likes id={id} />
      <NavBottom />
    </div>
  </RequireAuth>
  );
}

export default LikesPage;