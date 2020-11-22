import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import MainNavigation from './components/Navigation/MainNavigation/MainNavigation';
import Home from './pages/Home/Home';
import Tech from './pages/Tech/Tech';
import './App.scss';

const App = () => {
  let routes;

  routes = (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/tech" exact>
        <Tech />
      </Route>
      <Redirect to="/" />
    </Switch>
  );

  return (
    <Router>
      <MainNavigation />
      <main>
        {routes}
      </main>
    </Router>
  );
};

export default App;
