/* eslint-disable react/display-name */
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

import DataList from 'components/DataList';
import LinkButton from 'components/LinkButton';
import SubHeader from 'components/SubHeader';

import { UserType, FormattedType } from 'types';
import { columnsUsers } from 'utils/colums-data-handler';

import { Container } from 'styles/dashboard';

interface DashboardViewAdminPros {
  usersData: UserType[];
}

const DashboardViewAdmin = ({ usersData }: DashboardViewAdminPros): JSX.Element => {
  const [formattedData, setFormattedData] = useState<FormattedType[]>([]);

  useEffect(() => {
    const dataTemp: FormattedType[] = [];
    usersData &&
      usersData.map((d: UserType) => {
        return dataTemp.push({
          ...d,
          id: d._id,
          role: d.role.role_name,
          creation_date: format(new Date(d.creation_date), 'dd-MM-yyyy'),
        });
      });
    setFormattedData(dataTemp);
  }, [usersData]);

  return (
    <div>
      <Container>
        <SubHeader title="Tous.tes les utilisateurs.trices" />
        {usersData.length > 0 && (
          <LinkButton to="/" label="Ajouter un.e nouvel.le utilisateur.rice" color="secondary" />
        )}
      </Container>
      <DataList columns={columnsUsers} formattedData={formattedData} />
    </div>
  );
};

export default DashboardViewAdmin;
