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
      <BarnsContextProvider>
        <Router>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/galpon/:barnID" element={<BarnDetail />} />
            <Route path="/recogida/nueva" element={<NewRecord />} />
          </Routes>
        </Router>
      </BarnsContextProvider>
    </Suspense>
  );
}

export default App;
