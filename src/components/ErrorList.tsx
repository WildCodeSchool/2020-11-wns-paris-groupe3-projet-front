import React from 'react';

import { Error } from '../styles/auth-form';

const ErrorList = ({ errors }: any): JSX.Element => {
  return (
    <div className="ui error message">
      <ul className="list">
        {Object.values(errors).map((value: any) => (
          <Error key={value}>{value}</Error>
        ))}
      </ul>
    </div>
  );
};

export default ErrorList;
