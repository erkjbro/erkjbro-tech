import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Home from './pages/Home/Home';
import './App.css';

const App = () => {
  let routes;

  routes = (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Redirect to="/" />
    </Switch>
  );

  return (
    <Router>
      <div className="App">
        <main>
          {routes}
        </main>
      </div>
    </Router>
  );
};

export default App;
