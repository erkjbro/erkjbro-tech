import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import MainNavigation from './components/Navigation/MainNavigation/MainNavigation';
import SiteAlert from './components/UIElements/SiteAlert/SiteAlert';
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
      <SiteAlert>
        This website is currently under development. <br />
        Visit <a
        href="https://erkjbro.github.io/"
        style={{ color: 'white' }}
        >erkjbro.github.io</a> for my old portfolio site.
      </SiteAlert>
    </Router>
  );
};

export default App;
