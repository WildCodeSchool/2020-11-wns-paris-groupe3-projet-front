import React from 'react';

import { ErrorType } from '../types';

import { Error } from '../styles/auth-form';

const ErrorList = ({ errors }: ErrorType): JSX.Element => {
  return (
    <div className="ui error message">
      <ul className="list">
        {Object.values(errors).map((value: string) => (
          <Error key={value}>{value}</Error>
        ))}
      </ul>
    </div>
  );
};

export default ErrorList;
