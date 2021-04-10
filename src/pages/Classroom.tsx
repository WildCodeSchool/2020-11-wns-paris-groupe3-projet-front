import React, { useContext, useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import CustomCard from '../components/CustomCard';
import Header from '../components/Header';

import { CLASSROOMS_BY_USER_ID } from '../queries';
import { AuthContext } from '../context/auth-context';
import { UserType } from '../types';

const Classroom = (): JSX.Element => {
  const { state } = useContext(AuthContext);
  const { loading, error, data } = useQuery(CLASSROOMS_BY_USER_ID, { variables: { _id: state.user.id } });
  const [usersByRole, setUserByRole] = useState<any>();

  useEffect(() => {
    const teachersTemp: any = [];
    const studentsTemp: any = [];
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

  return (
    <div>
      <Header label={data.classroomByUserId.classname} />
      {usersByRole.teachers.map((user: UserType) => (
        <CustomCard key={user._id} user={user} />
      ))}
      {usersByRole.students.map((user: UserType) => (
        <CustomCard key={user._id} user={user} />
      ))}
    </div>
  );
};

export default Classroom;
