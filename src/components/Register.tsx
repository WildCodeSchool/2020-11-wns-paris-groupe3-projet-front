import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import { useMutation } from '@apollo/client';

import { HandleChange, HandleSubmit, HistoryType } from '../types';
import { REGISTER_USER } from '../queries';
import { UserContext } from '../context/UserContext';

import { TextInput, Form, Error } from '../styles/auth-form';

const Register = ({ history }: HistoryType): JSX.Element => {
  const context = useContext(UserContext);
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
      console.log(userData);
      context.loginData(userData);
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
    <div>
      <h1>Inscription</h1>
      <Form onSubmit={onSubmit}>
        <TextInput id="outlined-basic" label="Prénom" variant="outlined" name="firstname" onChange={onChange} />
        <TextInput id="outlined-basic" label="Nom" variant="outlined" name="lastname" onChange={onChange} />
        <TextInput id="outlined-basic" label="Email" variant="outlined" name="email" onChange={onChange} />
        <TextInput id="outlined-basic" label="Mot de passe" variant="outlined" name="password" onChange={onChange} />
        <TextInput
          id="outlined-basic"
          label="Confirmation du mot de passe"
          variant="outlined"
          name="confirmPassword"
          onChange={onChange}
        />
        <Button variant="contained" color="primary" type="submit">
          Se connecter
        </Button>
      </Form>
      {Object.keys(errors).length > 0 && (
        <div className="ui error message">
          <ul className="list">
            {Object.values(errors).map((value: any) => (
              <Error key={value}>{value}</Error>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Register;
