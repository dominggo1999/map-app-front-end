import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import './styles/main.scss';
import User from './components/pages/User';
import UserPlaces from './components/pages/UserPlaces';
import AddPlace from './components/pages/AddPlace';
import EditPlace from './components/pages/EditPlace';
import Auth from './components/pages/Auth';
import PageNotFound from './components/pages/PageNotFound';

const App = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);

  if(!isLogin) {
    <>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
        >
          <User />
        </Route>
        <Route
          exact
          path="/:userId/places"
        >
          <UserPlaces />
        </Route>
        <Route
          exact
          path="/auth"
        >
          <Auth />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </>;
  }

  return (
    <>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
        >
          <User />
        </Route>
        <Route
          exact
          path="/:userId/places"
        >
          <UserPlaces />
        </Route>
        <Route
          exact
          path="/addPlace"
        >
          <AddPlace />
        </Route>
        <Route
          exact
          path="/:userId/:placeId"
        >
          <EditPlace />
        </Route>
        <Route
          exact
          path="/auth"
        >
          <Auth />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
};

export default App;
