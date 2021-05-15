import { NavLink } from 'react-router-dom';

const NavMenu = ({ className, clickHandler }) => {
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
          to="/:userId/addPlace"
          activeClassName="link-active"
          exact
        >Add Place
        </NavLink>
      </li>
      <li onClick={clickHandler}>
        <NavLink
          to="/authenticate"
          activeClassName="link-active"
          exact
        >Authenticate
        </NavLink>
      </li>
    </ul>
  );
};

export default NavMenu;
