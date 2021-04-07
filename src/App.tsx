import React, { useContext, ComponentType } from 'react';
import { BrowserRouter as Router, Route, Redirect, RouteComponentProps } from 'react-router-dom';

import { AuthProvider, AuthContext } from './context/auth-context';

import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import NewAssignation from './components/pages/NewAssignation';
import NewTask from './components/pages/NewTask';

type CompProps = {
  component: ComponentType<RouteComponentProps>;
  path: string;
  exact: boolean;
};

const AuthRoute = ({ component: Component, ...rest }: CompProps) => {
  const { state } = useContext(AuthContext);

  return <Route {...rest} render={(props) => (!state.user.token ? <Redirect to="/" /> : <Component {...props} />)} />;
};

const App = (): JSX.Element => {
  return (
    <Router>
      <AuthProvider>
        <Route exact path="/" component={Home} />
        <AuthRoute exact path="/dashboard" component={Dashboard} />
        <Route exact path="/task" component={NewTask} />
        <Route exact path="/assignation" component={NewAssignation} />
      </AuthProvider>
    </Router>
  );
};

export default App;
