const Button = ({
  children, clickHandler, className, ...restProps
}) => {
  /*
warning,
danger
     */

  return (
    <button
      onClick={clickHandler}
      className={className}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
