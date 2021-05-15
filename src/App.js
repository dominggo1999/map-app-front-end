import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import './styles/main.scss';
import Users from './components/pages/Users';
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
          <Users />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
};

export default App;
