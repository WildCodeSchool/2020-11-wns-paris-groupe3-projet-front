import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import { useHistory } from 'react-router-dom';

import Login from 'components/Login';
import Register from 'components/Register';

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
