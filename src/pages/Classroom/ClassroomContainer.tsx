import React, { useContext, useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import ClassroomView from './ClassroomView';
import Header from '../../components/Header';

import { CLASSROOMS_BY_USER_ID } from '../../queries';
import { AuthContext } from '../../context/auth-context';
import { UserType } from '../../types';

export const ClassroomContainer = (): JSX.Element => {
  const { state } = useContext(AuthContext);
  const { loading, error, data } = useQuery(CLASSROOMS_BY_USER_ID, { variables: { _id: state.user.id } });
  const [usersByRole, setUserByRole] = useState<{ teachers: UserType[]; students: UserType[] }>();

  useEffect(() => {
    const teachersTemp: UserType[] = [];
    const studentsTemp: UserType[] = [];
    !loading &&
      data.classroomByUserId.users.filter((user: UserType) => {
        if (user.role.role_name === 'Teacher') {
          teachersTemp.push(user);
        }
        if (user.role.role_name === 'Student') {
          studentsTemp.push(user);
        }
      });
    setUserByRole({ teachers: teachersTemp, students: studentsTemp });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  console.log(usersByRole);
  return (
    <div>
      <Header label={data.classroomByUserId.classname} />
      <ClassroomView usersByRole={usersByRole} />
    </div>
  );
};
