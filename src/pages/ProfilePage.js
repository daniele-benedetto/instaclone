import React from 'react';
import RequireAuth from '../components/layouts/RequireAuth';
import NavBottom from '../components/ui/NavBottom';
import ProfileNav from '../components/ui/ProfileNav';

const ProfilePage = () => {
  return (
    <RequireAuth>
      <ProfileNav />
      <NavBottom />
    </RequireAuth>
  );
}

export default ProfilePage;