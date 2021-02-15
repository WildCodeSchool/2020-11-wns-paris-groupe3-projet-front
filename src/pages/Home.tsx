import React from 'react';

import AuthForm from '../components/AuthForm';

const Home = ({ history }: any): JSX.Element => {
  return (
    <div>
      <AuthForm history={history} />
    </div>
  );
};

export default Home;
