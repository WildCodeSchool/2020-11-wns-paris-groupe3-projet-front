import React from 'react';
import Button from '@material-ui/core/Button';

import { TextInput, Form, Error } from '../styles/auth-form';

const Login = ({ onSubmit, onChange, errors }: any): JSX.Element => {
  return (
    <div>
      <h1>Connexion</h1>
      <Form onSubmit={onSubmit}>
        <TextInput id="outlined-basic" label="Email" variant="outlined" name="email" onChange={onChange} />
        <TextInput id="outlined-basic" label="Mot de passe" variant="outlined" name="password" onChange={onChange} />
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

export default Login;
