import React, { useContext, ComponentType } from 'react';
import { BrowserRouter as Router, Route, Redirect, RouteComponentProps } from 'react-router-dom';

import { AuthProvider, AuthContext } from 'context/auth-context';

import Home from 'pages/Home';
import ClassroomContainer from 'pages/Classroom';
import DashboardContainer from 'pages/Dashboard';
import NewAssignation from 'pages/NewAssignation';
import NewTask from 'pages/NewTask';

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
        <AuthRoute exact path="/dashboard" component={DashboardContainer} />
        <Route exact path="/task" component={NewTask} />
        <Route exact path="/assignation" component={NewAssignation} />
        <Route exact path="/maclasse" component={ClassroomContainer} />
      </AuthProvider>
    </Router>
  );
};

export default App;
