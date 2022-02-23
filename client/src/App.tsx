import { CircularProgress } from '@mui/material';
import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import { BarnsContextProvider } from './context/BarnsContext';
import BarnDetail from './pages/BarnDetail';
import Home from './pages/Home';

const NewRecord = React.lazy(() => import('./pages/NewRecord'));

function App() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Router>
        <BarnsContextProvider>
          <NavigationBar />
          <Routes>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/galpon/:barnID">
              <BarnDetail />
            </Route>
            <Route path="/recogida/nueva">
              <NewRecord />
            </Route>
          </Routes>
        </BarnsContextProvider>
      </Router>
    </Suspense>
  );
}

export default App;
