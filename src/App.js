import logo from './logo.svg';
import './App.css';
import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router basename={process.env.REACT_APP_BASENAME}>
        <AppRoutes/>
      </Router>
    </Suspense>
  );
}

export default App;
