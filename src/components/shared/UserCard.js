import Avatar from './Avatar';

const UserCard = ({ name, image, places }) => {
  return (
    <div className="user-card card">
      <div className="user-card__left">
        <Avatar image={image} />
      </div>
      <div className="user-card__right">
        <div className="user-card__name">{name}</div>
        <div className="user-card__places">{places} Places</div>
      </div>
    </div>
  );
};

export default UserCard;
