import Avatar from './Avatar';

const UserCard = ({ username, image, places }) => {
  return (
    <div className="user-card card">
      <div className="user-card__left">
        <Avatar image={image} />
      </div>
      <div className="user-card__right">
        <div className="user-card__name">{username}</div>
        <div className="user-card__places">{places.length} {places.length > 1 ? 'places' : 'place'}</div>
      </div>
    </div>
  );
};

export default UserCard;
