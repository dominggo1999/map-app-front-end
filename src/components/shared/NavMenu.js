import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userLogout } from '../../redux/auth/authActions';

const NavMenu = ({ className, clickHandler }) => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const user = useSelector((state) => state.auth.userID);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(userLogout());
    clickHandler();
  };

  if(!isLogin) {
    return (
      <ul className={className}>
        <li onClick={clickHandler}>
          <NavLink
            to="/"
            activeClassName="link-active"
            exact
          >All Users
          </NavLink>
        </li>
        <li onClick={clickHandler}>
          <NavLink
            to="/auth"
            activeClassName="link-active"
            exact
          >Authenticate
          </NavLink>
        </li>
      </ul>
    );
  }

  return (
    <ul
      className={className}
    >
      <li onClick={clickHandler}>
        <NavLink
          to="/"
          activeClassName="link-active"
          exact
        >All Users
        </NavLink>
      </li>
      <li onClick={clickHandler}>
        <NavLink
          to={`/${user}/places`}
          activeClassName="link-active"
          exact
        >My Places
        </NavLink>
      </li>
      <li onClick={clickHandler}>
        <NavLink
          to="/addPlace"
          activeClassName="link-active"
          exact
        >Add Place
        </NavLink>
      </li>
      <li onClick={logout}>
        <NavLink
          to="/"
          exact
        >Logout
        </NavLink>
      </li>
    </ul>
  );
};

export default NavMenu;
