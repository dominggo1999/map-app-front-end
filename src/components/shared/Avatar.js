const Avatar = ({ image }) => {
  return (
    <span className="avatar">
      <img
        src={image}
        alt="Avatar"
      />
    </span>
  );
};

export default Avatar;
