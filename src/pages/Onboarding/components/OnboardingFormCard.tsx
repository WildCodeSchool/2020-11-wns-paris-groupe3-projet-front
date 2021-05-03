import React, { useContext, useState } from 'react';
import { Card, CardContent, Box, Grid } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { Field } from 'formik';
import { useMutation } from '@apollo/client';

import { OnboardingStep } from './OnboardingStep';
import OnboardingFormWithStepper from './OnboardingFormWithStepper';
import OnboardingConfirmationMessage from './OnboardingConfirmationMessage';
import { REGISTER_USER } from 'queries';
import { AuthContext } from 'context/auth-context';
import { ONBOARDING_FORM } from '../../../utils/consts';
import { HistoryType } from 'types';

const sleep = (time: number) => new Promise((acc) => setTimeout(acc, time));

const OnboardingFormCard = (): JSX.Element => {
  const [userValues, setUservalues] = useState({});
  const [schoolValues, setSchoolValues] = useState({});
  // const [errors, setErrors] = useState({});
  const { dispatch } = useContext(AuthContext);

  const [registerUser] = useMutation(REGISTER_USER, {
    update(_, { data: { register: user } }) {
      const userData = { user };
      dispatch.loginData(userData);
      // history.push('/dashboard');
    },
    variables: { input: userValues },
    // onError(err) {
    //   setErrors(err.graphQLErrors[0].extensions?.errors);
    // },
  });

  const [registerSchool] = useMutation(REGISTER_SCHOOL, {
    update(_, { data: { register: school } }) {
      const schoolData = { school };
      dispatch.loginData(schoolData);
      // history.push('/dashboard');
    },
    variables: { input: schoolValues },
    // onError(err) {
    //   setErrors(err.graphQLErrors[0].extensions?.errors);
    // },
  });

  const getFormContent = (fields: Array<{ name: string; label: string }>) => {
    return fields.map((field, index) => (
      <Box paddingBottom={2} key={index}>
        <Field fullWidth name={field.name} component={TextField} label={field.label} variant="outlined" size="small" />
      </Box>
    ));
  };

  // const onSubmit = async (values) => {

  // }

  return (
    <Grid container direction="column" alignItems="center">
      <Card>
        <CardContent>
          <OnboardingFormWithStepper
            initialValues={ONBOARDING_FORM.initialValues}
            onSubmit={async (values) => {
              await sleep(3000);
              const {
                firstname,
                lastname,
                email,
                password,
                confirmPassword,
                schoolName,
                schoolAddress,
                schoolPostalCode,
                schoolCity,
                schoolPhoneNumber,
              } = values;
              setUservalues({ firstname, lastname, email, password, confirmPassword });
              setSchoolValues({ schoolName, schoolAddress, schoolPostalCode, schoolCity, schoolPhoneNumber });
              console.log('useervalues', userValues);
              console.log('schoolvalues', schoolValues);
              // setErrors({});
              //await registerUser();
              // await registerSchool();
            }}
          >
            <OnboardingStep validationSchema={null} label="Vous">
              {getFormContent(ONBOARDING_FORM.userFields)}
            </OnboardingStep>
            <OnboardingStep validationSchema={null} label="Votre établissement">
              {getFormContent(ONBOARDING_FORM.schoolFields)}
            </OnboardingStep>
            <OnboardingStep label="Confirmation">
              <OnboardingConfirmationMessage />
            </OnboardingStep>
          </OnboardingFormWithStepper>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default OnboardingFormCard;
