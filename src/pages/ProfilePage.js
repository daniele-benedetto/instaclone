import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../components/layouts/Container';
import RequireAuth from '../components/layouts/RequireAuth';
import NavBottom from '../components/ui/NavBottom';
import NavSub from '../components/ui/NavSub';
import Profile from '../components/ui/Profile';

import { getUserService } from '../services/api/auth.service';
import { getUserElementService } from '../services/api/posts.service';

const ProfilePage = () => {

  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState(null);

  const { id } = useParams();

  const getUser = async () => {
    getUserService('id', id).then((response)=> {
      setUser(response[0]);
      getUserElementService(id, 'posts').then((response) => {
        setPosts(response);
      }).catch((error) => {
        console.log(error);
      })
    }).catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    getUser();
  },[]);

  return (
    <RequireAuth>
      {user && <>
        <NavSub name={user.username} />
        <Container>
          <Profile user={user} posts={posts} />
        </Container>
        <NavBottom />
      </> }
    </RequireAuth>
  );
}

export default ProfilePage;