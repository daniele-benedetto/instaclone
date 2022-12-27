import React from 'react';

import RequireAuth from '../components/layouts/RequireAuth';
import Posts from '../components/Posts';

import NavBottom from '../components/ui/NavBottom';
import NavStories from '../components/ui/NavStories';
import NavTop from '../components/ui/NavTop';

const HomePage = () => {
  return (
  <RequireAuth>
    <div className='HomePage'>
      <NavTop />
      <NavStories />
      <Posts />
      <NavBottom />
    </div>
  </RequireAuth>
  );
}

export default HomePage;
