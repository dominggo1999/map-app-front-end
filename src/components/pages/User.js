import { useEffect, useState } from 'react';
import UserList from '../shared/UserList';

const Users = () => {
  const [loadedUser, setLoadedUser] = useState();
  const [loading, setLoading] = useState(false);

  // Get data from database first and pass data to userlist as props
  useEffect(() => {
    setLoading(true);
    const getAllUsers = async () => {
      const response = await fetch('http://localhost:5000/api/users/');
      const responseData = await response.json();
      setLoadedUser(responseData.users);
      setLoading(false);
    };

    getAllUsers();
  }, []);

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {!loading && loadedUser && <UserList users={loadedUser} />}
    </>
  );
};

export default Users;
