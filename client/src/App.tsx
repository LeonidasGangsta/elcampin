import { useAuth0 } from '@auth0/auth0-react';
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
import Login from './pages/Login';

const NewRecord = React.lazy(() => import('./pages/NewRecord'));

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <Suspense fallback={<CircularProgress />}>
      <Router>
        <NavigationBar />
        {isAuthenticated ? (
          <BarnsContextProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/galpon/:barnID" element={<BarnDetail />} />
              <Route path="/recogida/nueva" element={<NewRecord />} />
            </Routes>
          </BarnsContextProvider>
        ) : (
          <Login />
        )}
      </Router>
    </Suspense>
  );
}

export default App;
