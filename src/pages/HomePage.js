import React from 'react';

import RequireAuth from '../components/layouts/RequireAuth';
import Posts from '../components/Posts';

import BottomNav from '../components/ui/BottomNav';
import StoriesNav from '../components/ui/StoriesNav';
import TopNav from '../components/ui/TopNav';

const HomePage = () => {
  return (
  <RequireAuth>
    <div className='HomePage'>
      <TopNav />
      <StoriesNav />
      <Posts />
      <BottomNav />
    </div>
  </RequireAuth>
  );
}

export default HomePage;
