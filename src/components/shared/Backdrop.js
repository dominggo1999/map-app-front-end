const Backdrop = ({ clickHandler }) => {
  return (
    <div
      role="button"
      className="backdrop"
      onClick={clickHandler}
    >
    </div>
  );
};

export default Backdrop;
