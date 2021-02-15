import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { HandleChange, HandleSubmit } from '../types';
import { LOGIN_USER } from '../queries';

const AuthForm = ({ history }: any): JSX.Element => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const [login] = useMutation(LOGIN_USER, {
    update(_, { data: { login: userData } }) {
      localStorage.getItem('jwtToken');
      history.push('/planning');
      console.log(userData);
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
      <form onSubmit={onSubmit}>
        <TextField id="outlined-basic" label="Email" variant="outlined" name="email" onChange={onChange} />
        <TextField id="outlined-basic" label="Mot de passe" variant="outlined" name="password" onChange={onChange} />
        <Button variant="contained" color="primary" type="submit">
          Se connecter
        </Button>
      </form>
      {Object.keys(errors).length > 0 && (
        <div className="ui error message">
          <ul className="list">
            {Object.values(errors).map((value: any) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
