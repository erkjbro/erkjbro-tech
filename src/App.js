import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import {
  Snackbar
} from '@material-ui/core';
import {
  Alert,
  AlertTitle
} from '@material-ui/lab';

import MainNavigation from './components/Navigation/MainNavigation/MainNavigation';
import Home from './pages/Home/Home';
import Tech from './pages/Tech/Tech';
import './App.scss';

const App = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 2000);
  }, []);

  const handleClose = () => setOpen(false);

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
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        open={open}
        onClose={handleClose}
      >
        <Alert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          severity="info"
        >
          <AlertTitle>Info</AlertTitle>
          This website is currently under development.
          <br/>
          Visit <a
            href="https://erkjbro.github.io/"
            style={{
              color: 'white'
            }}
          >erkjbro.github.io</a> for my old portfolio site.
        </Alert>
      </Snackbar>
    </Router>
  );
};

export default App;
