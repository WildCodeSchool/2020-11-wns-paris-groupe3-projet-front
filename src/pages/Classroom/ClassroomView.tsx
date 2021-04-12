import React from 'react';
import Typography from '@material-ui/core/Typography';

import ClassroomCard from './components/ClassroomCard';

import { UserType } from 'types';

export interface ClassroomViewProps {
  usersByRole: { teachers: UserType[]; students: UserType[] } | undefined;
}

const ClassroomView = ({ usersByRole }: ClassroomViewProps): JSX.Element => {
  return (
    <div>
      <Typography variant="h5">Equipe pédagogique</Typography>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {usersByRole && usersByRole.teachers.map((user: UserType) => <ClassroomCard key={user._id} user={user} />)}
      </div>
      <Typography variant="h5">Elèves</Typography>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {usersByRole && usersByRole.students.map((user: UserType) => <ClassroomCard key={user._id} user={user} />)}
      </div>
    </div>
  );
};

export default ClassroomView;
