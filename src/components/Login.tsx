import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import { useMutation } from '@apollo/client';

import { HandleChange, HandleSubmit, HistoryType } from '../types';
import { LOGIN_USER } from '../queries';
import { AuthContext } from '../context/auth-context';

import ErrorList from './ErrorList';

import { TextInput, Form } from '../styles/auth-form';

const Login = ({ history }: HistoryType): JSX.Element => {
  const { dispatch } = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [login] = useMutation(LOGIN_USER, {
    update(_, { data: { login: userData } }) {
      dispatch.loginData({ user: userData });
      history.push('/planning');
    },
    variables: values,
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions?.errors || err);
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
    <Form onSubmit={onSubmit}>
      <TextInput id="outlined-basic" label="Email" variant="outlined" name="email" type="email" onChange={onChange} />
      <TextInput
        id="outlined-basic"
        label="Mot de passe"
        variant="outlined"
        name="password"
        type="password"
        onChange={onChange}
      />
      <Button variant="contained" color="primary" type="submit">
        Connexion
      </Button>
      {Object.keys(errors).length > 0 && <ErrorList errors={errors} />}
    </Form>
  );
};

export default Login;
