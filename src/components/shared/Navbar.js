import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CSSTransition } from 'react-transition-group';
import NavMenu from './NavMenu';
import { toggleSideNavbar, hideSideNavbar } from '../../redux/navbar/navbarActions';
import Backdrop from './Backdrop';

const Navbar = () => {
  const displaySideNavbar = useSelector((state) => state.navbar.displaySideNavbar);
  const dispatch = useDispatch();

  return (
    <nav>
      {displaySideNavbar && (
        <Backdrop clickHandler={() => dispatch(hideSideNavbar())} />
      )}

      <div className="container">
        <Link
          to="/"
          className="nav-brand"
        >MyPlace
        </Link>
        <div
          className="hamburger-menu-icon"
          role="button"
          onClick={() => dispatch(toggleSideNavbar())}
        >
          <GiHamburgerMenu />
        </div>
        <NavMenu
          clickHandler={() => dispatch(hideSideNavbar())}
          className="nav-menu"
        />
        <CSSTransition
          in={displaySideNavbar}
          timeout={200}
          classNames="slide-in-left"
          mountOnEnter
          unmountOnExit
        >
          <NavMenu
            clickHandler={() => dispatch(hideSideNavbar())}
            className="nav-menu sidebar"
          />
        </CSSTransition>
      </div>
    </nav>
  );
};

export default Navbar;
