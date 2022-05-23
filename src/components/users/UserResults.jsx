/* eslint-disable no-use-before-define */
import { useContext } from 'react';
import UserItem from './UserItem';
import GithubContext from '../../context/github/GithubContext';

import Spinner from '../layout/Spinner';

function UserResults() {
  const { users, loading } = useContext(GithubContext);

  console.log(users, 'users UserResult');

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
  return <Spinner />;
}

export default UserResults;
