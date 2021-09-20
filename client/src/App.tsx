import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import { BarnsContextProvider } from './context/BarnsContext';
import BarnDetail from './pages/BarnDetail';
import Home from './pages/Home';
import NewRecord from './pages/NewRecord';

const App = () => (
  <Router>
    <BarnsContextProvider>
      <NavigationBar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/galpon/:barnID" component={BarnDetail} exact />
        <Route path="/recogida/nueva" component={NewRecord} exact />
        <Redirect to="/" />
      </Switch>
    </BarnsContextProvider>
  </Router>
);

export default App;
