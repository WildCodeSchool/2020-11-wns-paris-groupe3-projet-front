/* eslint-disable react/display-name */
import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { format } from 'date-fns';

import DataList from 'components/DataList';
import Header from 'components/Header';
import LinkButton from 'components/LinkButton';
import SubHeader from 'components/SubHeader';

import { USERS } from 'queries';

import { UserType, FormattedType } from 'types';
import { columnsUsers } from 'utils/colums-data-handler';

import { Container } from 'styles/dashboard';

const DashboardAdmin = (): JSX.Element => {
  const [formattedData, setFormattedData] = useState<FormattedType[]>([]);

  const { loading, error, data } = useQuery(USERS);

  useEffect(() => {
    const dataTemp: FormattedType[] = [];
    data &&
      data.users.map((d: UserType) => {
        return dataTemp.push({
          ...d,
          id: d._id,
          role: d.role.role_name,
          creation_date: format(new Date(d.creation_date), 'dd-MM-yyyy'),
        });
      });
    setFormattedData(dataTemp);
  }, [loading]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div>
      <Header label="Tableau de bord" />
      <Container>
        <SubHeader title="Tous.tes les utilisateurs.trices" />
        {data.length > 0 && <LinkButton to="/" label="Ajouter un.e nouvel.le utilisateur.rice" color="secondary" />}
      </Container>
      <DataList columns={columnsUsers} formattedData={formattedData} />
    </div>
  );
};

export default DashboardAdmin;
