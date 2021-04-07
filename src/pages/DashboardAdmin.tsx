import React from 'react';

import Header from '../components/Header';
import AdminList from '../components/AdminList';

const users = [
  {
    id: '1',
    firstname: 'Sophie',
    lastname: 'Durand',
    role: 'teacher',
    created_at: '12/12/2020',
    status: 'in process',
  },
  {
    id: '2',
    firstname: 'Jean',
    lastname: 'Dupont',
    role: 'student',
    created_at: '25/01/2021',
    status: 'registered',
  },
  {
    id: '3',
    firstname: 'Sonia',
    lastname: 'Allouche',
    role: 'admin',
    created_at: '14/02/2021',
    status: 'registered',
  },
];

const DashboardAdmin = (): JSX.Element => {
  return (
    <div>
      <Header label={'Mon tableau de bord'} />
      <AdminList data={users} />
    </div>
  );
};

export default DashboardAdmin;
