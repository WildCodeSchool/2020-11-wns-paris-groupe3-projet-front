import React, { useContext, ComponentType } from 'react';
import { BrowserRouter as Router, Route, Redirect, RouteComponentProps } from 'react-router-dom';

import { AuthProvider, AuthContext } from 'context/auth-context';

import Home from 'pages/Home';
import DashboardContainer from 'pages/Dashboard';
import NewAssignation from 'pages/NewAssignation';
import NewTask from 'pages/NewTask';
import OnboardingContainer from 'pages/Onboarding';

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
        <Route exact path="/assignation" component={NewAssignation} />
        <Route exact path="/onboarding" component={OnboardingContainer} />
        <AuthRoute exact path="/dashboard" component={DashboardContainer} />
        <Route exact path="/task" component={NewTask} />
      </AuthProvider>
    </Router>
  );
};

export default App;
