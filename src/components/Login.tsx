import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Login = ({ onSubmit, onChange, errors }: any): JSX.Element => {
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

export default Login;
