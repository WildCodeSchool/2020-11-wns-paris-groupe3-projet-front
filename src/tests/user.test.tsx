/* eslint-disable react/display-name */
import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import { useHistory } from 'react-router-dom';
import { GridColDef } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';

import Login from '../components/Login';
import Register from '../components/Register';
import DataList from '../components/DataList';

import { Edit, Delete } from '../styles/data-list';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('Home', () => {
  describe('if new user', () => {
    it('renders register form', () => {
      const historyMock = useHistory();
      render(
        <MockedProvider>
          <Register history={historyMock} />
        </MockedProvider>,
      );
      expect(screen.getByText('Inscription')).toBeInTheDocument();
    });
  });

  describe('if already registered user', () => {
    it('renders login form', () => {
      const historyMock = useHistory();
      render(
        <MockedProvider>
          <Login history={historyMock} />
        </MockedProvider>,
      );
      expect(screen.getByText('Connexion')).toBeInTheDocument();
    });
  });
});

describe('DashboardAdmin', () => {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'firstname', headerName: 'Prénom', width: 200 },
    { field: 'lastname', headerName: 'Nom', width: 200 },
    { field: 'role', headerName: 'Rôle', width: 200 },
    { field: 'creation_date', headerName: 'Créé.e le', type: 'date', width: 200 },
    { field: 'status', headerName: 'Statut', width: 200 },
    {
      field: 'edit',
      headerName: 'Editer',
      width: 200,
      renderCell: () => (
        <strong>
          <Button size="small">
            <Edit />
          </Button>
        </strong>
      ),
    },
    {
      field: 'delete',
      headerName: 'Supprimer',
      width: 200,
      renderCell: () => (
        <strong>
          <Button size="small">
            <Delete />
          </Button>
        </strong>
      ),
    },
  ];
  describe('if no user into database', () => {
    it('renders a text info and a button to add new one', () => {
      const data = { users: [] };
      render(
        <MockedProvider>
          <DataList data={data.users} columns={columns} />
        </MockedProvider>,
      );
      expect(screen.getByText('Pour commencer à ajouter des utilisateurs')).toBeInTheDocument();
    });
  });

  describe('if no user into database', () => {
    it('renders a text info and a button to add new one', () => {
      const data: any = {
        users: [
          {
            _id: '1',
            firstname: 'Jane',
            lastname: 'Doe',
            role: 'admin',
            creation_date: '2021-02-17T11:12:00.000Z',
            status: false,
          },
        ],
      };
      render(
        <MockedProvider>
          <DataList data={data.users} columns={columns} />
        </MockedProvider>,
      );
      expect(screen.getByText('1')).toBeInTheDocument();
      expect(screen.getByText('Jane')).toBeInTheDocument();
      expect(screen.getByText('Doe')).toBeInTheDocument();
    });
  });
});
