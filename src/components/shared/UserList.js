import { Link } from 'react-router-dom';
import UserCard from './UserCard';

const UserList = ({ users }) => {
  return (
    <div className="user-list">
      <div className="container">
        {users && users.map(({ id, ...restUserProps }) => (
          <Link
            to={`/${id}/places`}
            key={id}
            className="user-card__link"
          >
            <UserCard
              {...restUserProps}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserList;
