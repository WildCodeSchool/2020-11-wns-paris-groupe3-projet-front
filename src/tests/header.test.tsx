import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';

import Header from '../components/Header';

describe('Header', () => {
  describe('When on all pages', () => {
    it('should render header with label and user info', () => {
      const state = { user: { firstname: 'Jane', lastname: 'Doe' } };
      render(
        <MockedProvider>
          <Header label="My header" firstname={state.user.firstname} lastname={state.user.lastname} />
        </MockedProvider>,
      );

      const header = screen.getByText('My header');
      const firstname = screen.getByText('Jane Doe');
      expect(header).toBeInTheDocument();
      expect(firstname).toBeInTheDocument();
    });
  });
});
