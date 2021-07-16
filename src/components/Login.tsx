import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useMutation } from '@apollo/client';

import { HandleChange, HandleSubmit } from 'types';
import { LOGIN_USER } from 'queries';
import { AuthContext } from 'context/auth-context';

import ErrorList from './ErrorList';

import { TextInput, Form } from 'styles/auth-form';

const Login = (): JSX.Element => {
  const history = useHistory();
  const { dispatch } = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [login, { loading }] = useMutation(LOGIN_USER, {
    variables: values,
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions?.errors || err);
    },
    onCompleted({ login }) {
      dispatch.loginData({ user: login });
      login.role.role_name === 'Admin' && history.push('/admin/dashboard');
      login.role.role_name === 'Student' && history.push('/student/dashboard');
      login.role.role_name === 'Teacher' && history.push('/teacher/dashboard');
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

  if (loading) return <p>Loading</p>;

  return (
    <Form>
      <TextInput label="Email" variant="outlined" name="email" type="email" onChange={onChange} />
      <TextInput label="Mot de passe" variant="outlined" name="password" type="password" onChange={onChange} />
      <Button onClick={(e: any) => onSubmit(e)} variant="contained" color="primary" type="button">
        Connexion
      </Button>
      {Object.keys(errors).length > 0 && <ErrorList errors={errors} />}
    </Form>
  );
};

export default Login;
