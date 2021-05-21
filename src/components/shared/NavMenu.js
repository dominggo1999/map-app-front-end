import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userLogout } from '../../redux/auth/authActions';

const NavMenu = ({ className, clickHandler }) => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();

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
          to="/:userId/places"
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
      <li onClick={() => dispatch(userLogout())}>
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
