import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import MainNavigation from './components/Navigation/MainNavigation/MainNavigation';
// import SiteAlert from './components/UIElements/SiteAlert/SiteAlert';
import Home from './pages/Home/Home';
import Bio from './pages/Bio/Bio';
import Tech from './pages/Tech/Tech';
import './App.scss';

const App = () => {
  let routes;
  // let alertMessage;

  routes = (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/bio" exact>
        <Bio />
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
      {/* <SiteAlert>
        {alertMessage}
      </SiteAlert> */}
    </Router>
  );
};

export default App;
