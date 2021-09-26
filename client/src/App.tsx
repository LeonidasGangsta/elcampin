import { CircularProgress } from '@mui/material';
import React, { Suspense } from 'react';
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

const NewRecord = React.lazy(() => import('./pages/NewRecord'));

const App = () => (
  <Suspense fallback={<CircularProgress />}>
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
  </Suspense>
);

export default App;
