import React from 'react';
import { postFollowerService, postFollowService } from '../../services/api/followers.service';
import Button from './Button';

const Profile = ({user, posts}) => {
  //SOLO PER TEST...
  const onAddFollow = () => {
    const userId = localStorage.getItem("id");

    const dataFollower = {}

    postFollowerService(
      userId, dataFollower
    ).then((response)=> {
      const dataFollow = {
        followerId: response.data.id,
        userId: user.id,
      }
      postFollowService(
        response.data.id, dataFollow
      ).then((response)=> {
        console.log(response)
        //id del response serve per fare update all'id del follower per aggiungere followId che è uguale all'id di follow
      }).catch((response) => {
        console.log(response);
      });
    }).catch((response) => {
      console.log(response);
    });

  }

  return (
    <div className='flex flex-wrap w-full'>
      <Button 
          title="Follow"
          styleBtn="primary"
          onClick={onAddFollow}
      />
      {posts && posts.map(post => {
        return(
          <div key={post.id} className='w-1/3'>
            <img src={post.image} />
          </div>
        );
      })}
    </div>
  );
}

export default Profile;