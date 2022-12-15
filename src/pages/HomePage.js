import React from 'react';

import RequireAuth from '../components/layouts/RequireAuth';

const HomePage = () => {
  return (
  <RequireAuth>
    <div className='HomePage'>
      HomePage
    </div>
  </RequireAuth>
  );
}

export default HomePage;
