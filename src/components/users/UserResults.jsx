/* eslint-disable no-use-before-define */
import { useEffect, useState } from 'react';
import UserItem from './UserItem';

import Spinner from '../layout/Spinner';

function UserResults() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const userUrl = `${import.meta.env.VITE_API_URL}/users`;
    const accessToken = `${import.meta.env.VITE_API_GITHUB_TOKEN}`;

    const response = await fetch(userUrl, {
      headers: {
        Authorization: `token ${accessToken}`,
      },
    });

    const data = await response.json();
    console.log(data);

    setUsers(data);
    setLoading(false);
  };

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
  return Spinner;
}

export default UserResults;
