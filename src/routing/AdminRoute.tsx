import React, { ComponentType } from 'react';
import { Redirect, Route, RouteComponentProps } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

type CompProps = {
  component: ComponentType<RouteComponentProps>;
  path: string;
  exact: boolean;
};

type MyToken = {
  exp: string;
  id: string;
  email: string;
  firstname: string;
  lastname: string;
  role: {
    role_name: string;
  };
};

const AdminRoute = ({ component: Component, ...rest }: CompProps): JSX.Element => {
  const token = localStorage.getItem('jwtToken');
  let decodedToken: MyToken;
  let role: string;

  if (token) {
    decodedToken = jwtDecode(token);
    role = decodedToken.role.role_name;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        token && role === 'Admin' ? (
          <Component {...props} />
        ) : token && role === 'Teacher' ? (
          <Redirect to="/teacher/dashboard" />
        ) : token && role === 'Student' ? (
          <Redirect to="/student/dashboard" />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default AdminRoute;
