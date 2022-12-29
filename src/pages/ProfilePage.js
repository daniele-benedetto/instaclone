import React from 'react';
import { useParams } from 'react-router-dom';
import RequireAuth from '../components/layouts/RequireAuth';
import NavBottom from '../components/ui/NavBottom';
import ProfileNav from '../components/ui/ProfileNav';

const ProfilePage = () => {

  const { id } = useParams();

  return (
    <RequireAuth>
      <ProfileNav />
      <NavBottom />
    </RequireAuth>
  );
}

export default ProfilePage;