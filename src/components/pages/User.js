import { useEffect } from 'react';
import UserList from '../shared/UserList';

const dummyUsers = [
  {
    id: 'u1',
    name: 'Max Schwarz',
    image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    places: 3,
  },
  {
    id: 'u2',
    name: 'John Doe',
    image:
        'https://images.pexels.com/photos/4330308/pexels-photo-4330308.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    places: 3,
  },
];

const Users = () => {
  // Get data from database first and pass data to userlist as props
  useEffect(() => {
  // Call api end point here
  }, []);

  return (
    <>
      <UserList users={dummyUsers} />
    </>
  );
};

export default Users;
