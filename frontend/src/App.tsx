import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppProvider from './hooks';
import Routes from './routes';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'assets/styles/tailwind.css';

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <Routes />
    </AppProvider>
  </Router>
);
export default App;
