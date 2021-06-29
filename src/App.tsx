import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AuthProvider } from 'context/auth-context';
import AdminRoute from './routing/AdminRoute';
import StudentRoute from './routing/StudentRoute';
import TeacherRoute from './routing/TeacherRoute';

import Home from 'pages/Home';
import DashboardAdmin from 'pages/Dashboard/DashboardAdmin';
import DashboardStudent from 'pages/Dashboard/DashboardStudent';
import DashboardTeacher from 'pages/Dashboard/DashboardTeacher';
import NewAssignation from 'pages/NewAssignation';
import NewTask from 'pages/NewTask';

const App = (): JSX.Element => {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <AdminRoute exact path="/admin/dashboard" component={DashboardAdmin} />
          <StudentRoute exact path="/student/dashboard" component={DashboardStudent} />
          <TeacherRoute exact path="/teacher/dashboard" component={DashboardTeacher} />
          <Route exact path="/task" component={NewTask} />
          <Route exact path="/assignation" component={NewAssignation} />
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;
