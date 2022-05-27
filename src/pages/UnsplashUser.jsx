// import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import Spinner from '../components/layout/Spinner';
import UnsplashContext from '../context/unsplash/UnsplashContext';

function UnsplashUser() {
  const { getUser, user, loading } = useContext(UnsplashContext);

  console.log(user);
  console.log('--------');

  const params = useParams();

  console.log(params.login, 'test');

  const { id, username, location, bio } = user;

  useEffect(() => {
    getUser(params.login);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <div>{id}</div>
      <div>{username}</div>
      <div>{location}</div>
      <div>{bio}</div>
    </div>
  );
}

export default UnsplashUser;
