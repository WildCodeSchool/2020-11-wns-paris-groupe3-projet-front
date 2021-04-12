import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';

import ClassroomCard from 'pages/Classroom/components/ClassroomCard';
import ClassroomView, { ClassroomViewProps } from 'pages/Classroom/ClassroomView';

import { UserType } from 'types';

describe('Classroom', () => {
  describe('When on classroom page', () => {
    const user: UserType = { _id: '1', firstname: 'Jane', lastname: 'Doe', role: { _id: '1', role_name: 'student' } };
    it('should render a card with the firstname and the lastname of a user', () => {
      render(
        <MockedProvider>
          <ClassroomCard user={user} />
        </MockedProvider>,
      );

      const userInfos = screen.getByText('Jane Doe');
      expect(userInfos).toBeInTheDocument();
    });

    it('should render 2 types of subtitles', () => {
      const usersByRoleMock: ClassroomViewProps['usersByRole'] = {
        teachers: [{ _id: '1', firstname: 'Jane', lastname: 'Doe', role: { _id: '1', role_name: 'teacher' } }],
        students: [{ _id: '1', firstname: 'Jon', lastname: 'Doe', role: { _id: '1', role_name: 'student' } }],
      };
      render(
        <MockedProvider>
          <ClassroomView usersByRole={usersByRoleMock} />
        </MockedProvider>,
      );

      const firstSubTitle = screen.getByText('Equipe pédagogique');
      const secondSubTitle = screen.getByText('Elèves');
      expect(firstSubTitle).toBeInTheDocument();
      expect(secondSubTitle).toBeInTheDocument();
    });
  });
});
