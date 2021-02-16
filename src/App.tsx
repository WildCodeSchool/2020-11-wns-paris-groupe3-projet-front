import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { AuthProvider } from './context/auth-context';

import Planning from './components/Planning';
import Home from './pages/Home';

const App = (): JSX.Element => {
  return (
    <Router>
      <AuthProvider>
        <Route exact path="/" component={Home} />
        <Route exact path="/planning" component={Planning} />
      </AuthProvider>
    </Router>
  );
};

export default App;
