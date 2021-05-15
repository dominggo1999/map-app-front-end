const Button = ({ children, clickHandler, className }) => {
  /*
warning,
danger
     */

  return (
    <button
      onClick={clickHandler}
      className={className}
    >
      {children}
    </button>
  );
};

export default Button;
