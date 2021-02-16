import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import { useMutation } from '@apollo/client';

import { HandleChange, HandleSubmit, HistoryType } from '../types';
import { REGISTER_USER } from '../queries';
import { AuthContext } from '../context/auth-context';

import ErrorList from './ErrorList';

import { TextInput, Form } from '../styles/auth-form';

const Register = ({ history }: HistoryType): JSX.Element => {
  const { dispatch } = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [register] = useMutation(REGISTER_USER, {
    update(_, { data: { register: userData } }) {
      dispatch.loginData(userData);
      history.push('/planning');
    },
    variables: { input: values },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions?.errors);
    },
  });

  const onChange: HandleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit: HandleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    register();
  };

  return (
    <Form onSubmit={onSubmit}>
      <TextInput
        id="outlined-basic"
        label="Prénom"
        variant="outlined"
        name="firstname"
        type="text"
        onChange={onChange}
      />
      <TextInput id="outlined-basic" label="Nom" variant="outlined" name="lastname" type="text" onChange={onChange} />
      <TextInput id="outlined-basic" label="Email" variant="outlined" name="email" type="email" onChange={onChange} />
      <TextInput
        id="outlined-basic"
        label="Mot de passe"
        variant="outlined"
        name="password"
        type="password"
        onChange={onChange}
      />
      <TextInput
        id="outlined-basic"
        label="Confirmation du mot de passe"
        variant="outlined"
        name="confirmPassword"
        type="password"
        onChange={onChange}
      />
      <Button variant="contained" color="primary" type="submit">
        S&apos;inscrire
      </Button>
      {Object.keys(errors).length > 0 && <ErrorList errors={errors} />}
    </Form>
  );
};

export default Register;