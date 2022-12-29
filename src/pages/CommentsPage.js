import React from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../components/Comments';

import RequireAuth from '../components/layouts/RequireAuth';
import NavBottom from '../components/ui/NavBottom';
import NavSub from '../components/ui/NavSub';

const CommentsPage = () => {

  const { id } = useParams();


  return (
  <RequireAuth>
    <div className='CommentsPage'>
      <NavSub name='Commenti' />
      <Comments id={id} />
      <NavBottom />
    </div>
  </RequireAuth>
  );
}

export default CommentsPage;