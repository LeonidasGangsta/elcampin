import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';

// eslint-disable-next-line arrow-body-style
const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </Router>
  );
};

export default App;
