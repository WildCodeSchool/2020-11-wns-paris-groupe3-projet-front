import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useMutation } from '@apollo/client';

import { HandleChange, HandleSubmit } from 'types';
import { REGISTER_USER } from 'queries';
import { AuthContext } from 'context/auth-context';

import ErrorList from './ErrorList';

import { TextInput, Form } from 'styles/auth-form';

const Register = (): JSX.Element => {
  const history = useHistory();
  const { dispatch } = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [register, { loading }] = useMutation(REGISTER_USER, {
    variables: { input: values },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions?.errors);
    },
    onCompleted({ register }) {
      dispatch.loginData({ user: register });
      register.role.role_name === 'Admin' && history.push('/admin/dashboard');
      register.role.role_name === 'Student' && history.push('/student/dashboard');
      register.role.role_name === 'Teacher' && history.push('/teacher/dashboard');
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

  if (loading) return <p>Loading</p>;

  return (
    <Form onSubmit={onSubmit}>
      <TextInput label="Prénom" variant="outlined" name="firstname" type="text" onChange={onChange} />
      <TextInput label="Nom" variant="outlined" name="lastname" type="text" onChange={onChange} />
      <TextInput label="Email" variant="outlined" name="email" type="email" onChange={onChange} />
      <TextInput label="Mot de passe" variant="outlined" name="password" type="password" onChange={onChange} />
      <TextInput
        label="Confirmation du mot de passe"
        variant="outlined"
        name="confirmPassword"
        type="password"
        onChange={onChange}
      />
      <Button variant="contained" color="primary" type="submit">
        Inscription
      </Button>
      {Object.keys(errors).length > 0 && <ErrorList errors={errors} />}
    </Form>
  );
};

export default Register;
