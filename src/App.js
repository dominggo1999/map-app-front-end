import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import './styles/main.scss';
import User from './components/pages/User';
import UserPlaces from './components/pages/UserPlaces';
import PageNotFound from './components/pages/PageNotFound';

const App = () => {
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
          path="/authenticate"
        >
          teste
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
};

export default App;
