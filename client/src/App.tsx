import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import { BarnsContextProvider } from './context/BarnsContext';
import BarnDetail from './pages/BarnDetail';
import Home from './pages/Home';

// eslint-disable-next-line arrow-body-style
const App = () => {
  return (
    <Router>
      <BarnsContextProvider>
        <NavigationBar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/galpon/:barnID" component={BarnDetail} exact />
        </Switch>
      </BarnsContextProvider>
    </Router>
  );
};

export default App;
