import { NavLink } from 'react-router-dom';

const NavMenu = ({ className, clickHandler }) => {
  return (
    <ul
      className={className}
    >
      <li onClick={clickHandler}>
        <NavLink
          to="/users"
          activeClassName="link-active"
        >All Users
        </NavLink>
      </li>
      <li onClick={clickHandler}>
        <NavLink
          to="/:userId/places"
          activeClassName="link-active"
        >My Places
        </NavLink>
      </li>
      <li onClick={clickHandler}>
        <NavLink
          to="/:userId/addPlace"
          activeClassName="link-active"
        >Add Place
        </NavLink>
      </li>
      <li onClick={clickHandler}>
        <NavLink
          to="/authenticate"
          activeClassName="link-active"
        >Authenticate
        </NavLink>
      </li>
    </ul>
  );
};

export default NavMenu;
