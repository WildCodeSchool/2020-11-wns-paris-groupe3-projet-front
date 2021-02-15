import React, { useState, useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { HandleChange, HandleSubmit } from '../types';
import { LOGIN_USER } from '../queries';
import { UserContext } from '../context/UserContext';

import Login from '../components/Login';

const Home = ({ history }: RouteComponentProps): JSX.Element => {
  const context = useContext(UserContext);
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const [login] = useMutation(LOGIN_USER, {
    update(_, { data: { login: userData } }) {
      context.loginData(userData);
      history.push('/planning');
    },
    variables: values,
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions?.errors);
    },
  });

  const onChange: HandleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit: HandleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    login();
  };
  return (
    <div>
      <Login onSubmit={onSubmit} onChange={onChange} errors={errors} />
    </div>
  );
};

export default Home;
